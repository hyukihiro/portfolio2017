import $ from 'jquery';
import controller from './_controller';

export default class Menu {

  constructor() {
    this._$window   = $('window');
    this._$body     = $('body');
    this._$html     = $('html');
    this._$trigger  = $('.header .toggle .txt');
    this._isOpen    = false;
    this._active    = 'is-menu-active';
    
    this._handleEvents();
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
}
