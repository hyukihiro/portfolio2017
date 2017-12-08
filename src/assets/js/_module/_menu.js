export default class Menu {

  constructor() {
    this._$body     = document.body;
    this._$html     = document.documentElement;
    this._$trigger  = document.querySelector('.header .toggle .txt');
    this._$sound    = document.querySelectorAll('#js-sound');
    this._$list     = document.querySelectorAll('.js-btn a');
    this._$logo     = document.querySelector('.js-btn-logo a');
    this._isOpen    = false;
    this._active    = 'is-menu-active';

    this._handleEvents();
    this._sound();
  }

  _handleEvents() {
    let _this = this;

    // Dispatch event when "MENU" text clicked
    this._$trigger.addEventListener('click', this._onClick.bind(this), false);
    this._$trigger.addEventListener('click', this._getItems.bind(this), false);

    // Dispatch event when listitem clicked
    for( let i = 0; i < this._$list.length; i++ ) {
      this._$list[i].addEventListener('click', this._onClick.bind(this), false);
    }

    // Dispatch event when logo clicked
    this._$logo.addEventListener('click', this._onClickLogo.bind(this), false);
  }

  _onClick() {
    if ( this._isOpen ) {
      this._$body.classList.remove(this._active);
      this._isOpen = false;
    } else {
      this._$body.classList.add(this._active);
      this._isOpen = true;
    }
  }

  _onClickLogo() {
    if ( this._isOpen ) {
      this._$body.classList.remove(this._active);
      this._isOpen = false;
    } else {
      return false;
    }
  }

  _onClickLink() {
    this._$body.classList.remove(this._active);
    this._isOpen = false;
  }

  _getItems() {
    this._$proList  = document.querySelectorAll('.js-link a');

    // Add dynamic generated items and dispatch event when these clicked
    for( let i = 0; i < this._$proList.length; i++ ) {
      this._$proList[i].addEventListener('click', this._onClickLink.bind(this), false);
    }
  }

  _sound() {
    let _this = this;

    for( let i = 0; i < this._$list.length; i++ ) {
      this._$list[i].addEventListener('mouseenter', this._onMouseenter.bind(this), false);
      this._$list[i].addEventListener('mouseleave', this._onMouseleave.bind(this), false);
    }
  }

  _onMouseenter() {
    this._$sound[0].currentTime = 0;
    this._$sound[0].volume = 0.2;
    this._$sound[0].play();
  }

  _onMouseleave() {
    this._$sound[0].pause();
  }
}
