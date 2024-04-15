import * as THREE from 'three';

import { range } from '../utils';
import { Pendulum } from './pendulum';
import { world } from './world';

type CradleOptions = {
  radius: number;
  length: number;
  count: number;
};

export class Cradle {
  public readonly scene = new THREE.Scene();
  private pendulumns: Pendulum[] = [];
  private abortController = new AbortController();

  constructor({ radius, length, count }: CradleOptions) {
    this.pendulumns = [...range(0, count)].map((i) => {
      const x = i * radius * 2 - radius * (count - 1);
      const pendulum = new Pendulum({
        radius: radius - Math.max(radius * 0.02, 0.009),
        position: { x, y: 0, z: 0 },
        length,
      });
      this.scene.add(pendulum.scene);
      return pendulum;
    });

    world.addEventListener(
      'collision',
      (event) => {
        this.pendulumns
          .filter((pendulum) =>
            event.detail.colliders.includes(pendulum.collider),
          )
          .forEach((pendulum) =>
            pendulum.playCollisionSound(event.detail.force),
          );
      },
      {
        signal: this.abortController.signal,
      },
    );
  }

  public applyImpulse(impulse: number, count: number) {
    this.pendulumns
      .slice(0, count)
      .forEach((pendulum) => pendulum.applyImpulse(impulse));
  }

  public update() {
    world.update();
    this.pendulumns.forEach((pendulum) => pendulum.update());
  }

  public dispose() {
    this.abortController.abort();
    this.pendulumns.forEach((pendulum) => pendulum.dispose());
  }
}
