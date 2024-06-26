import RAPIER from '@dimforge/rapier3d-compat';
import * as THREE from 'three';

import { params } from '../gui';
import { PendulumMaterial } from './pendulum-materials/pendulum-material';
import { world } from './world';

type PendulumOptions = {
  position?: RAPIER.Vector;
  radius?: number;
  length?: number;
};

export class Pendulum {
  public readonly scene = new THREE.Scene();
  private ballMesh: THREE.Mesh<THREE.SphereGeometry, THREE.Material>;
  private ballRigidBody: RAPIER.RigidBody;
  private fulcrumRigidBody: RAPIER.RigidBody;
  private lineMesh: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  private points: [THREE.Vector3, THREE.Vector3];
  public readonly collider: RAPIER.Collider;

  constructor(
    private pendulumMaterial: PendulumMaterial,
    {
      position = { x: 0, y: 0, z: 0 },
      radius = 0.5,
      length = 2,
    }: PendulumOptions = {},
  ) {
    // 支点
    const fulcrumRigidBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(
      position.x,
      position.y + length / 2,
      position.z,
    );
    const fulcrumRigidBody = world.world.createRigidBody(fulcrumRigidBodyDesc);

    // 球体
    const ballRidigBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y - length / 2, position.z)
      .setLinearDamping(0.05);
    const ballRigidBody = world.world.createRigidBody(ballRidigBodyDesc);
    const ballColliderDesc = RAPIER.ColliderDesc.ball(radius);
    const collider = world.world.createCollider(
      ballColliderDesc,
      ballRigidBody,
    );

    collider.setRestitution(1);
    collider.setFriction(0);
    collider.setActiveEvents(RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS);
    // collider.setContactForceEventThreshold(0.1);

    // ジョイント
    world.world.createImpulseJoint(
      RAPIER.JointData.revolute(
        { x: 0, y: 0, z: 0 },
        { x: 0, y: length, z: 0 },
        {
          x: 0,
          y: 0,
          z: 1,
        },
      ),
      fulcrumRigidBody,
      ballRigidBody,
      true,
    );

    this.collider = collider;
    this.ballRigidBody = ballRigidBody;
    this.fulcrumRigidBody = fulcrumRigidBody;

    this.ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 32, 32),
      this.pendulumMaterial.material,
    );
    this.scene.add(this.ballMesh);
    this.ballMesh.castShadow = true;
    this.ballMesh.receiveShadow = this.pendulumMaterial.receiveShadow;

    this.ballMesh.customDepthMaterial = this.pendulumMaterial.depthMaterial;

    this.points = [
      new THREE.Vector3().copy(fulcrumRigidBody.translation()),
      new THREE.Vector3().copy(ballRigidBody.translation()),
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(this.points);
    this.lineMesh = new THREE.Line(
      geometry,
      this.pendulumMaterial.lineMaterial,
    );
    this.scene.add(this.lineMesh);
    this.lineMesh.castShadow = true;
  }

  public applyImpulse(impulse: number) {
    this.ballRigidBody.applyImpulse(
      {
        x: impulse * this.ballRigidBody.mass(),
        y: 0,
        z: 0,
      },
      true,
    );
  }

  public update() {
    const position = this.ballRigidBody.translation();
    this.ballMesh.position.copy(position);
    this.ballMesh.quaternion.copy(this.ballRigidBody.rotation());
    this.points[1].copy(position);
    this.lineMesh.geometry.setFromPoints(this.points);
    this.pendulumMaterial.update();
  }

  public dispose() {
    this.pendulumMaterial.dispose();
    this.ballMesh.geometry.dispose();
    this.lineMesh.geometry.dispose();

    /**
     * > This will remove this rigid-body as well as all its attached colliders and joints. Every other bodies touching or attached by joints to this rigid-body will be woken-up.
     * ということなので、ColliderとJointも一緒に削除されると思われる
     */
    world.world.removeRigidBody(this.ballRigidBody);
    world.world.removeRigidBody(this.fulcrumRigidBody);
  }
  public playCollisionSound(force: number) {
    const v = force / this.ballRigidBody.mass();
    const strength = Math.min(v / 400, 1);
    this.pendulumMaterial.onContact(strength);
    if (params.sound.muted) return;
    const { audio } = this.pendulumMaterial;
    audio.currentTime = 0;
    audio.volume = strength;
    audio.play();
  }
}
