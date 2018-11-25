import $ from 'jquery';

export default class MobileMenu {
	constructor() {
		this.$menuIcon = $('.site-header__menu-icon');
		this.$menuContent = $('.site-header__menu-content');
		this.$siteHeader = $('.site-header');
		this.registerListeners();
	}

	registerListeners = () => {
		this.$menuIcon.click(this.toggleMenu);
	}

	toggleMenu = () => {
		this.$menuContent.toggleClass('site-header__menu-content--is-visible');
		this.$siteHeader.toggleClass('site-header--is-expanded');
		this.$menuIcon.toggleClass('site-header__menu-icon--close-x');
	}
}
