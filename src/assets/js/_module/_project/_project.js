import eventFire from './_eventFire';
import Emitter from '../_emitter';

import {
  PROJECT_CHANGE
} from '../_message';

class Project {
  constructor() {
    this.init();
  }

  init() {
    Emitter.on(PROJECT_CHANGE, this.enterAnimation.bind(this));
  }

  enterAnimation() {
    console.log(Emitter);
  }
}

export default Project;
