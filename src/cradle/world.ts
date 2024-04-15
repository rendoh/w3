import RAPIER from '@dimforge/rapier3d-compat';
import { TypedEventTarget } from 'typescript-event-target';

import { clock } from '../core/clock';

await RAPIER.init();
const eventQueue = new RAPIER.EventQueue(true);

interface WorldEventMap {
  collision: CustomEvent<{
    colliders: [RAPIER.Collider, RAPIER.Collider];
    force: number;
  }>;
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
    eventQueue.drainContactForceEvents((e) => {
      this.dispatchTypedEvent(
        'collision',
        new CustomEvent('collision', {
          detail: {
            colliders: [
              this.world.getCollider(e.collider1()),
              this.world.getCollider(e.collider2()),
            ],
            force: e.totalForceMagnitude(),
          },
        }),
      );
    });
  }
}

export const world = new World();
