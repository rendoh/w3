import * as THREE from 'three';

export interface PendulumMaterial {
  readonly material: THREE.Material;
  readonly audio: HTMLAudioElement;
  readonly receiveShadow: boolean;
  readonly depthMaterial?: THREE.Material;
  readonly lineMaterial: THREE.LineBasicMaterial;
  onContact(strength: number): void;
  update(): void;
  dispose(): void;
}
