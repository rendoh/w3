import * as THREE from 'three';

import { Cradle } from './cradle';
import { params } from './gui';

class App {
  public readonly scene = new THREE.Scene();
  private directionalLightCameraHelper?: THREE.CameraHelper;
  cradle?: Cradle;
  constructor() {
    this.resetCradle();

    params.addEventListener('applyImpulse', () => {
      this.cradle?.applyImpulse(-params.impulse.strength, params.impulse.count);
    });

    params.addEventListener('reset', () => {
      this.resetCradle();
    });

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
      }),
    );
    ground.receiveShadow = true;
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    this.scene.add(ground);

    this.addLights();
  }

  private addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.castShadow = true;
    directionalLight.position.set(3, 3, 3);
    this.scene.add(directionalLight);

    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
    );
    this.scene.add(directionalLightHelper);
    directionalLightHelper.visible = false;

    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 15;

    directionalLight.shadow.camera.top = 6;
    directionalLight.shadow.camera.right = 6;
    directionalLight.shadow.camera.bottom = -6;
    directionalLight.shadow.camera.left = -6;

    directionalLight.shadow.mapSize.width = 2 ** 10;
    directionalLight.shadow.mapSize.height = 2 ** 10;

    const directionalLightCameraHelper = new THREE.CameraHelper(
      directionalLight.shadow.camera,
    );
    this.scene.add(directionalLightCameraHelper);
    this.directionalLightCameraHelper = directionalLightCameraHelper;
  }

  private resetCradle() {
    this.cradle && this.scene.remove(this.cradle.scene);
    this.cradle?.dispose();
    const { reset } = params;
    const cradle = new Cradle({
      radius: reset.radius,
      length: reset.length,
      count: reset.count,
    });
    this.cradle = cradle;
    this.scene.add(cradle.scene);
  }

  public update() {
    this.cradle?.update();
    if (this.directionalLightCameraHelper) {
      this.directionalLightCameraHelper.visible =
        params.helpers.directionalLightCameraHelper;
    }
  }
}

export const app = new App();
