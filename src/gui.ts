import GUI from 'lil-gui';
import { TypedEventTarget } from 'typescript-event-target';

interface ParamsEventMap {
  applyImpulse: CustomEvent;
  reset: CustomEvent;
}

class Params extends TypedEventTarget<ParamsEventMap> {
  sound = {
    muted: true,
  };
  impulse = {
    strength: 3,
    count: 1,
    apply: () => {
      this.dispatchTypedEvent('applyImpulse', new CustomEvent('applyImpulse'));
    },
  };
  reset = {
    type: 'hologram',
    radius: 0.5,
    length: 2,
    count: 5,
    reset: () => {
      this.dispatchTypedEvent('reset', new CustomEvent('reset'));
    },
  };
  mettalic = {
    roughness: 0.1,
    metalness: 0.75,
  };
  hologram = {
    frequency: 30,
    speed: 0.1,
  };
  helpers = {
    directionalLightCameraHelper: false,
  };
}

export const params = new Params();

const gui = new GUI();

gui.add(params.sound, 'muted');

const impulseFolder = gui.addFolder('Impulse');
impulseFolder.add(params.impulse, 'strength', 0, 5);
impulseFolder.add(params.impulse, 'count', 1, 7, 1);
impulseFolder.add(params.impulse, 'apply');

const resetFolder = gui.addFolder('Reset');
resetFolder
  .add(params.reset, 'type', ['hologram', 'metallic'])
  .onChange(toggleMaterialFolders);
resetFolder.add(params.reset, 'radius', 0.1, 0.75);
resetFolder.add(params.reset, 'length', 0.5, 2.5);
resetFolder.add(params.reset, 'count', 1, 7, 1);
resetFolder.add(params.reset, 'reset');

const hologramFolder = gui.addFolder('Hologram');
hologramFolder.add(params.hologram, 'frequency', 0, 100);
hologramFolder.add(params.hologram, 'speed', 0.01, 1);

const metallicFolder = gui.addFolder('Metallic');
metallicFolder.add(params.mettalic, 'roughness', 0, 1);
metallicFolder.add(params.mettalic, 'metalness', 0, 1);

const helpersFolder = gui.addFolder('Helpers');
helpersFolder.add(params.helpers, 'directionalLightCameraHelper');

function toggleMaterialFolders(type: string) {
  Object.entries({
    hologram: hologramFolder,
    metallic: metallicFolder,
  }).forEach(([key, folder]) => {
    folder[type === key ? 'show' : 'hide']();
  });
}

toggleMaterialFolders(params.reset.type);
