import controller from './_controller';
import $ from 'jquery';
import _ from 'underscore';

const modeClass = {
	pc: 'mode-pc',
	sp: 'mode-sp'
};

/**
 * @class PageView
 */
export default class PageView {

	/**
	 * 初期化
	 *
	 * @constructor
	 */
	constructor() {
		this._$window   = $('window');
		this._$document = $('document');
		this._$html     = $('html');
		this._$head     = $('head');
		this._$page     = $('#page');
		this._isInit = true;

		this._handleEvents();

		this._init();
	}


	_init() {
		this._checkMode();
		this._onScroll();

		this._isInit = false;
	}



	/**
	 * イベントの監視
	 */
	_handleEvents() {
		// resize
		this._$window.on('resize', _.debounce(this._onResize.bind(this), 50));
		// scroll
		this._$window.on('scroll', _.throttle(this._onScroll.bind(this), 10));
	}



	/**
	 * リサイズ処理
	 *
	 * - PageStateインスタンスの値を更新
	 * - checkMode関数の呼び出し
	 * - リサイズイベントの通知
	 */
	_onResize() {
		controller.dispatchEvent('resize');
	}


	/**
	 * スクロールイベント発行
	 */
	_onScroll() {
		let scrollValue = this._$document.scrollTop();

		controller.dispatchEvent({ type: 'scroll', data: { scroll: scrollValue } });
	}



	/**
	 * 表示モードの判定
	 *
	 * - PageStateインスタンスの値を更新
	 * - デバイス専用イベントと変更イベントの通知
	 */


	 _checkMode() {
		 let mql = window.matchMedia('screen and (max-width: 768px)');
		 let _this = this;

		function checkBreakPoint(mql) {
			if (mql.matches) {
				controller.dispatchEvent({
					type: 'modechange',
					data: { mode: 'sp' }
				});
				_this._$html.removeClass(modeClass.pc);
				_this._$html.addClass(modeClass.sp);
			} else {
				controller.dispatchEvent({
					type: 'modechange',
					data: { mode: 'pc' }
				});
				_this._$html.removeClass(modeClass.sp);
				_this._$html.addClass(modeClass.pc);
			}
		}

		mql.addListener(checkBreakPoint);

		checkBreakPoint(mql);
		}
}
