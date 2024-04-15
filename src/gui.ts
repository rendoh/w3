import GUI from 'lil-gui';
import { TypedEventTarget } from 'typescript-event-target';

interface ParamsEventMap {
  applyImpulse: CustomEvent;
  reset: CustomEvent;
}

class Params extends TypedEventTarget<ParamsEventMap> {
  sound = {
    enabled: false,
  };
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
  helpers = {
    directionalLightCameraHelper: false,
  };
}

export const params = new Params();

const gui = new GUI();

gui.add(params.sound, 'enabled');

const impulseFolder = gui.addFolder('Impulse');
impulseFolder.add(params.impulse, 'strength', 0, 5);
impulseFolder.add(params.impulse, 'count', 1, 7, 1);
impulseFolder.add(params.impulse, 'apply');

const resetFolder = gui.addFolder('Reset');
resetFolder.add(params.reset, 'radius', 0.1, 0.75);
resetFolder.add(params.reset, 'length', 0.5, 2.5);
resetFolder.add(params.reset, 'count', 1, 7, 1);
resetFolder.add(params.reset, 'reset');

const helpersFolder = gui.addFolder('Helpers');
helpersFolder.add(params.helpers, 'directionalLightCameraHelper');
