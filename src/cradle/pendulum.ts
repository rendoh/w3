import RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { world } from './world';

type PendulumOptions = {
  position?: RAPIER.Vector;
  radius?: number;
  length?: number;
};

export class Pendulum {
  public readonly scene = new THREE.Scene();
  private mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshNormalMaterial>;
  private ballRigidBody: RAPIER.RigidBody;

  constructor({
    position = { x: 0, y: 0, z: 0 },
    radius = 0.5,
    length = 2,
  }: PendulumOptions = {}) {
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

    this.ballRigidBody = ballRigidBody;

    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 16, 16),
      new THREE.MeshNormalMaterial(),
    );
    this.scene.add(this.mesh);
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
    this.mesh.position.copy(this.ballRigidBody.translation());
    this.mesh.quaternion.copy(this.ballRigidBody.rotation());
  }

  public dispose() {
    this.mesh.material.dispose();
    this.mesh.geometry.dispose();

    /**
     * > This will remove this rigid-body as well as all its attached colliders and joints. Every other bodies touching or attached by joints to this rigid-body will be woken-up.
     * ということなので、ColliderとJointも一緒に削除されると思われる
     */
    world.world.removeRigidBody(this.ballRigidBody);
  }
}
