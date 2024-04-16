import * as THREE from 'three';

import { params } from '../../gui';
import collisionSound from './collision.mp3?url';
import { PendulumMaterial } from './pendulum-material';

export class MetallicPendulumMaterial implements PendulumMaterial {
  public readonly material: THREE.MeshStandardMaterial;
  public readonly audio = new Audio(collisionSound);
  public readonly lineMaterial = new THREE.LineBasicMaterial({
    color: 0x666666,
  });
  public readonly receiveShadow = true;

  constructor() {
    this.material = new THREE.MeshStandardMaterial({
      color: 0xcc0000,
      roughness: params.mettalic.roughness,
      metalness: params.mettalic.metalness,
    });
  }

  public update() {
    this.material.roughness = params.mettalic.roughness;
    this.material.metalness = params.mettalic.metalness;
  }

  public onContact() {
    // do nothing
  }

  public dispose() {
    this.material.dispose();
    this.lineMaterial.dispose();
  }
}
