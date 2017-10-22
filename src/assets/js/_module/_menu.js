import $ from 'jquery';

export default class Menu {

  constructor() {
    this._$window   = $('window');
    this._$body     = $('body');
    this._$html     = $('html');
    this._$trigger  = $('.header .toggle .txt');
    this._$sound    = $('#js-sound');
    this._$list     = $('.js-btn a');
    this._isOpen    = false;
    this._active    = 'is-menu-active';

    this._handleEvents();
    this._sound();
  }

  _handleEvents() {
    this._$trigger.on('click', this._onClick.bind(this));
  }

  _onClick() {
    if ( this._isOpen ) {
      this._$body.removeClass(this._active);
      this._isOpen = false;
    } else {
      this._$body.addClass(this._active);
      this._isOpen = true;
    }
  }

  _sound() {
    let sound = document.getElementById("js-sound");
    this._$list.hover(()=> {
      sound.currentTime = 0;
      sound.volume = 0.2;
      sound.play();
    }, ()=> {
      sound.pause();
    });
  }
}
