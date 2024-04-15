import RAPIER from '@dimforge/rapier3d-compat';
import { TypedEventTarget } from 'typescript-event-target';

import { clock } from '../core/clock';

await RAPIER.init();
const eventQueue = new RAPIER.EventQueue(true);

interface WorldEventMap {
  collision: CustomEvent<[RAPIER.Collider, RAPIER.Collider]>;
}

class World extends TypedEventTarget<WorldEventMap> {
  public readonly world: RAPIER.World;

  constructor() {
    super();
    this.world = new RAPIER.World({
      x: 0,
      y: -9.81,
      z: 0,
    });
  }

  public update() {
    this.world.timestep = clock.delta / 1000;
    this.world.step(eventQueue);
    eventQueue.drainCollisionEvents((handle1, handle2, started) => {
      if (started) {
        this.dispatchTypedEvent(
          'collision',
          new CustomEvent('collision', {
            detail: [
              this.world.getCollider(handle1),
              this.world.getCollider(handle2),
            ],
          }),
        );
      }
    });
  }
}

export const world = new World();
