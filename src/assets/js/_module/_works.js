import $ from 'jquery';
import {TweenMax} from 'gsap';

let props = {
	ease: 'Expo.easeOut'
}

export default class Works {
  constructor() {
    this._$text = $('.js-scroller .scroll__txt span');
    this._$line = $('.js-scroller .scroll__line');
    this._$projName = $('.js-proj-name span');

    this._tween();
  }

  _tween() {
		TweenMax.fromTo(this._$projName, 1, {
  		y: 50
  	}, {
  		y: 0,
  		ease: props.ease
  	});

  	TweenMax.staggerTo(this._$text, 1, {
  		y: 0,
  		opacity: 1,
  		ease: props.ease,
  		delay: .5
  	}, .05);

  	TweenMax.to(this._$line, 2, {
  		y: 0,
  		opacity: 1,
  		delay: 1,
  		ease: props.ease
  	});

  }
}
