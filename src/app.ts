import { renderer } from './core/renderer';
import { Cradle } from './cradle';
import { params } from './gui';

class App {
  cradle?: Cradle;
  constructor() {
    this.reset();

    params.addEventListener('applyImpulse', () => {
      this.cradle?.applyImpulse(-params.impulse.strength, params.impulse.count);
    });

    params.addEventListener('reset', () => {
      this.reset();
    });
  }

  public reset() {
    this.cradle && renderer.scene.remove(this.cradle.scene);
    this.cradle?.dispose();
    const { reset } = params;
    const cradle = new Cradle({
      radius: reset.radius,
      length: reset.length,
      count: reset.count,
    });
    this.cradle = cradle;
    renderer.scene.add(cradle.scene);
  }

  public update() {
    this.cradle?.update();
  }

  // public applyImpulse(impulse: number, count: number) {
  //   this.cradle?.applyImpulse(impulse, count);
  // }
}

export const app = new App();
