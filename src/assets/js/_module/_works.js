import $ from 'jquery';
import {TweenMax} from 'gsap';

let props = {
	ease: 'Expo.easeOut'
}

export default class Works {
  constructor() {
    this._$text = $('.scroll__txt span');
    this._$line = $('.scroll__line');
    this._$projName = $('.js-proj-name span');

		this._init();
  }

	_init() {
		let _this = this;
		TweenMax.set(this._$projName, { y: 50 });
		TweenMax.set(this._$text, { y: 20, opacity: 1});
		TweenMax.set(this._$line, {	y: 40, opacity: 0, onComplete: function() {
				_this._tween();
			}
		});
		TweenMax.set(this._$text, { opacity: 0 })
	}

  _tween() {
		TweenMax.to(this._$projName, 1.5, {
  		y: 0,
  		ease: props.ease
  	});

  	TweenMax.staggerTo(this._$text, 1.5, {
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
