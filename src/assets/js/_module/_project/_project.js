import { HTTP } from '../../../../environment';
import eventFire from './_eventFire';
import message from '../_message';
import state from '../_state';

class Project {
  constructor() {

    // this.getPosts();
    // this._init();
    // this.event();
  }

  getPosts() {
    let _this = this;
    HTTP.get('wp-json/wp/v2/posts')
    .then((resp) => {
      console.log(resp.data);
      state.this._projects = resp.data;
    })
    .catch((err) => {
      console.log(err)
    })
  }

  _init() {
    this.currentProjectIndex = 0;
    this.postsNb = this._projects.length;
    console.log('from init', this._projects);
  }


  event() {
  }
}

export default Project;
