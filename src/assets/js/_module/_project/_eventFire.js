import controller from '../_controller';
import message from '../_message'
import _ from 'underscore';

class EventFire {
  constructor() {
    this._isWheel = false;

    this._init();
    this._handleEvents();
  }

  _init() {
    this._onWheel = this._onWheel.bind(this);
  }

  _handleEvents() {
    document.addEventListener('wheel', _.throttle(this._onWheel), 1000);
  }

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

  _previousProject() {
    console.log('prev');
  }

  _nextProject() {
    console.log('next');
  }
}

export default EventFire;
