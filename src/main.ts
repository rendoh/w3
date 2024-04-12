import 'the-new-css-reset';
import './gui';

import { app } from './app';
import { clock } from './core/clock';
import { renderer } from './core/renderer';
import { sizes } from './core/sizes';

function resize() {
  renderer.resize();
}

function update() {
  app.update();
  renderer.update();
}

renderer.scene.add(app.scene);
sizes.addEventListener('resize', resize);
clock.addEventListener('tick', update);
