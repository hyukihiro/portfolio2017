import controller from '../_controller';
import State from '../_state'
import Emitter from '../_emitter';
import _ from 'underscore';

import {
  PROJECT_CHANGE
} from '../_message';

class EventFire {

  constructor() {
    this._isWheel = false;

    this._init();
    this._handleEvents();
  }

  /**
   * メンバに登録
   */
  _init() {
    this._onWheel = this._onWheel.bind(this);
  }

  /**
   * イベント登録
   */
  _handleEvents() {
    document.addEventListener('wheel', _.throttle(this._onWheel), 1000);
  }

  /**
   * ホイールイベント
   */
  _onWheel(e) {
    let deltaY = (e.wheelDelta) ? e.deltaY : e.detail * 200;

    if ( deltaY < -5 && !this._isWheel) {

      this._isWheel = true;

      clearTimeout(this.wheelPromise);

      this.wheelPromise = setTimeout(()=> {
        this._isWheel = false;
      }, 800)

      this._previousProject();

    } else if ( deltaY > 5 && !this._isWheel ) {
      this._isWheel = true;

      clearTimeout(this.wheelPromise);

      this.wheelPromise = setTimeout(()=> {
        this._isWheel = false;
      }, 800);

      this._nextProject();
    }
  }

  /**
   *　前の案件に移動
   */
  _previousProject() {
    State.currentProjectIndex = (State.currentProjectIndex > 0) ? State.currentProjectIndex - 1 : State.projectsNb - 1;
    Emitter.emit(PROJECT_CHANGE, {
      currentProject: State.projects[State.currentProjectIndex],
      direction: -1
    });
  }

  /**
   * 次の案件に移動
   */
  _nextProject() {
    console.log('next');
  }
}

export default EventFire;
