import eventFire from './_eventFire';
import message from '../_message';

class Project {
  constructor() {
    this.event();
  }

  event() {
    console.log(message.onWheel);
  }
}

export default Project;
