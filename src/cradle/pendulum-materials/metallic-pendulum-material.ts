import * as THREE from 'three';

import collisionSound from './collision.mp3?url';
import { PendulumMaterial } from './pendulum-material';

export class MetallicPendulumMaterial implements PendulumMaterial {
  public readonly material: THREE.MeshStandardMaterial;
  public readonly audio = new Audio(collisionSound);
  public readonly receiveShadow = true;

  constructor() {
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.95,
    });
  }

  public update() {
    // do nothing
  }

  public onContact() {
    // do nothing
  }

  public dispose() {
    this.material.dispose();
  }
}
