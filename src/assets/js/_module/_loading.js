import $ from 'jquery';
import controller from './_controller';
import {TweenMax, Power2, TimelineLite} from 'gsap';
const imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);

let props = {
	delay: .4,
	ease: 'Expo.easeOut'
}

export default class Loading {
	constructor() {
		this._$body = $('body');
		this._$wrapper = $('.js-loading-wrapper');
		this._$parent = $('.js-loading-parent');
		this._$letters = $('.js-loading-letter');
		this._$line = $('.js-loading-line');
		this._tl = null;

		this._handleEvents();
		this._init();
		this._tween();
	}

	_init() {
		this._$body.imagesLoaded()
		.done( function( instance ) {
			controller.dispatchEvent({ type: 'domReady'});
		});
	}

	_handleEvents() {
		controller.on('domReady', this._finish.bind(this));
	}

	_finish() {
		setTimeout(() => {
			this._tl.pause();
			let ftl = new TimelineMax();
			ftl.set( this._$line, { scaleY: .05})
			ftl.to( this._$letters, .2, { y: 0	})
			ftl.to( this._$line, .5, { scaleX: 1, scaleY: .05, ease: props.ease})
			ftl.to( this._$line, .5, { scaleY: 1, ease: props.ease, delay: .5})
			ftl.add('sync')
			ftl.to( this._$line, .2, { scaleY: 0, ease: props.ease, delay: .25, transformOrigin: '0 0'}, 'sync')
			ftl.set( this._$letters, { autoAlpha: 0}, 'sync')
			ftl.to( this._$wrapper, 1, { scaleY: 0, ease: props.ease})
		}, 4000);
	}

	_tween() {
		this._tl = new TimelineMax();
		this._tl.set( this._$letters, {	y: 30})
		this._tl.staggerTo( this._$letters, .6, {
			y: 0,
			ease: props.ease,
			yoyo: true,
			repeat: -1,
			repeatDelay: .75
		}, .05);
	}
}
