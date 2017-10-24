import {TweenMax} from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import $ from 'jquery';

let props = {
  ease: Expo.easeOut
}

export default class Scroller {
  constructor() {
    this._$window = $(window);
    this._$trigger = $('.js-scroller');

    this._handleEvents();
  }

  _handleEvents() {
    this._$trigger.on('click', this._onClick.bind(this));
  }

  _onClick(e) {
    e.preventDefault();
    let $target = e.currentTarget.getAttribute('data-scroller') ? $(e.currentTarget.getAttribute('data-scroller')) : $(e.currentTarget).attr('href');
    TweenMax.to(this._$window, 1, {
      scrollTo: {
        y: $target,
        autoKill: false
      },
      ease: props.ease
    });
  }
}
