import RAPIER from '@dimforge/rapier3d-compat';

import { clock } from '../core/clock';

class World {
  public readonly world: RAPIER.World;

  constructor() {
    this.world = new RAPIER.World({
      x: 0,
      y: -9.81,
      z: 0,
    });
  }

  public update() {
    this.world.timestep = clock.delta / 1000;
    this.world.step();
  }
}

await RAPIER.init();
export const world = new World();
