import GUI from 'lil-gui';
import { TypedEventTarget } from 'typescript-event-target';

interface ParamsEventMap {
  applyImpulse: CustomEvent;
  reset: CustomEvent;
}

class Params extends TypedEventTarget<ParamsEventMap> {
  impulse = {
    strength: 3,
    count: 1,
    apply: () => {
      this.dispatchTypedEvent('applyImpulse', new CustomEvent('applyImpulse'));
    },
  };
  reset = {
    radius: 0.5,
    length: 2,
    count: 5,
    reset: () => {
      this.dispatchTypedEvent('reset', new CustomEvent('reset'));
    },
  };
}

export const params = new Params();

const gui = new GUI();

const impulseFolder = gui.addFolder('Impulse');
impulseFolder.add(params.impulse, 'strength', 0, 5);
impulseFolder.add(params.impulse, 'count', 1, 10, 1);
impulseFolder.add(params.impulse, 'apply');

const resetFolder = gui.addFolder('Reset');
resetFolder.add(params.reset, 'radius', 0.1, 1);
resetFolder.add(params.reset, 'length', 0.1, 10);
resetFolder.add(params.reset, 'count', 1, 10, 1);
resetFolder.add(params.reset, 'reset');
