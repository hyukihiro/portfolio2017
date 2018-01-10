import eventFire from './_eventFire';
import Emitter from '../_emitter';

import {
  PROJECT_CHANGE
} from '../_message';

class Project {
  constructor() {
    this._handleEvents();
  }

  _handleEvents() {
    Emitter.on(PROJECT_CHANGE, this.onProjectChange.bind(this));
  }

  onProjectChange({currentProject, direction}) {
    console.log(currentProject, direction);
  }
}

export default Project;
