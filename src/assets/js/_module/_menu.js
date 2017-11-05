import $ from 'jquery';

export default class Menu {

  constructor() {
    this._$window   = $('window');
    this._$body     = $('body');
    this._$html     = $('html');
    this._$trigger  = $('.header .toggle .txt');
    this._$sound    = $('#js-sound');
    this._$list     = $('.js-btn a');
    this._$logo     = $('.js-btn-logo a');
    this._isOpen    = false;
    this._active    = 'is-menu-active';

    this._handleEvents();
    this._sound();
  }

  _handleEvents() {
    this._$trigger.on('click', this._onClick.bind(this));
    this._$list.on('click', this._onClick.bind(this));
    this._$logo.on('click', this._onClickLogo.bind(this));
    $(document).on('click', '.js-link', this._onClickLink.bind(this));
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

  _onClickLogo() {
    if ( this._isOpen ) {
      this._$body.removeClass(this._active);
      this._isOpen = false;
    } else {
      return false;
    }
  }

  _onClickLink() {
    this._$body.removeClass(this._active);
    this._isOpen = false;
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
