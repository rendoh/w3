import * as THREE from 'three';

import { clock } from '../../core/clock';
import { beta, lerp } from '../../utils';
import hologramSound from './hologram.mp3?url';
import fragmentShader from './hologram-pendulum.fs';
import vertexShader from './hologram-pendulum.vs';
import depthFragmentShader from './hologram-pendulum-depth.fs';
import { PendulumMaterial } from './pendulum-material';

export class HologramPendulumMaterial implements PendulumMaterial {
  public readonly material: THREE.RawShaderMaterial;
  public readonly audio = new Audio(hologramSound);
  public readonly receiveShadow = false;
  public readonly depthMaterial: THREE.RawShaderMaterial;

  constructor() {
    this.material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: clock.elapsed },
        uGlitchStrength: { value: 0 },
      },
    });
    this.depthMaterial = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader: depthFragmentShader,
      uniforms: this.material.uniforms,
    });
  }

  public update() {
    this.material.uniforms.uTime.value = clock.elapsed;

    this.material.uniforms.uGlitchStrength.value = lerp(
      this.material.uniforms.uGlitchStrength.value,
      0,
      beta(0.1, clock.delta),
    );
  }

  public onContact(strength: number) {
    this.material.uniforms.uGlitchStrength.value = strength * 1.5;
  }

  public dispose() {
    this.material.dispose();
    this.depthMaterial.dispose();
  }
}
