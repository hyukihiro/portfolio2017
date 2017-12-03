// import $ from 'jquery';
import controller from './_controller';
import TweenMax from 'gsap';
const imagesLoaded = require('imagesloaded');
// imagesLoaded.makeJQueryPlugin($);

let props = {
	delay: .4,
	ease: 'Expo.easeInOut',
	easeBack: 'Back.easeOut.config(1.7)'
}

export default class Loading {
	constructor() {
		this._$body              = document.querySelector('body');
		this._$container         = document.querySelector('.js-container');
		this._$wrapper           = document.querySelector('.js-loading-wrapper');
		this._$parent01          = document.querySelector('.js-reveal-01');
		this._$mesaasge          = document.querySelector('.js-reveal-message');
		this._$mesaasgeInner     = document.querySelector('.js-reveal-message-inner');
		this._$mesaasgeText      = document.querySelectorAll('.js-reveal-text');
		this._$mesaasgeTextInner = document.querySelectorAll('.js-reveal-text span');
		this._$letters           = document.querySelectorAll('.js-loading-letter');
		this._tl                 = null;

		this._handleEvents();
		this._init();
		// this._tween();
	}

	_init() {
		imagesLoaded(this._$body, function() {
			controller.dispatchEvent({ type: 'domReady'});
		})
		TweenMax.set(this._$container, { y: 50, opacity: 0 });
	}

	_handleEvents() {
		controller.on('domReady', this._finish.bind(this));
	}

	_finish() {
		let _this = this;
		setTimeout(() => {
			const ftl = new TimelineMax();
			ftl.to( this._$mesaasge, 1, { x: 0, ease: props.ease}, 1)
			ftl.to( this._$mesaasgeInner, 1, { delay: 0, x: 0, ease: props.ease}, 1)
			ftl.staggerFrom( this._$mesaasgeText, 1, {x: '-2vw', ease:Power2.easeOut}, -0.02, 1)
			ftl.add('next')
			ftl.staggerTo(this._$mesaasgeTextInner, 1.3, {yPercent: -120, delay: .3, ease:Power2.easeInOut}, 0.04, 'next');
			ftl.to(this._$wrapper, 1.3, {opacity: 0, delay: .3, ease:Power4.easeIn}, 'next')
			ftl.to(this._$container, 1, {opacity: 1, y: 0, delay: -.8, ease:props.easeBack, onComplete:function() {
				document.querySelector('.wrapper').removeChild(_this._$wrapper);
			}})
		}, 1000);
	}

	_tween() {
		this._tl = new TimelineMax();
		this._tl.set( this._$letters, {	y: 30})
		this._tl.staggerTo( this._$letters, .2, {
			y: 0,
			ease: props.easeBack
		}, .05);
	}
}
