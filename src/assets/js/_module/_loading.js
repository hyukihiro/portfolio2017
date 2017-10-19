import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap";
import imagesLoaded from "imagesLoaded";

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
		
		this._init();
		this._tween();
	}

	_init() {
		$('body').imagesLoaded()
		.always( function( instance ) {
			console.log('all images loaded');
		})
		.done( function( instance ) {
			console.log('all images successfully loaded');
		})
		.fail( function() {
			console.log('all images loaded, at least one is broken');
		})
		.progress( function( instance, image ) {
			var result = image.isLoaded ? 'loaded' : 'broken';
			console.log( 'image is ' + result + ' for ' + image.img.src );
		});

	}



	_tween() {
		TweenMax.staggerFromTo( this._$letters, .5, {
			y: 30
		}, { 
			y: 0,
			ease: props.ease,
			yoyo: true,
			repeat: -1,
			repeatDelay: 1.25
		}, .05);
	}

}
