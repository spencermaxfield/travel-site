import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

export default class StickyHeader {
	constructor() {
		this.$siteHeader = $('.site-header');
		this.$headerTrigger = $('.large-hero__title');
		this.$pageSections = $('.page-section');
		this.$headerLinks = $('.primary-nav a');
		this.$lazyImages = $('.lazyload');

		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.$headerLinks.smoothScroll();
		this.$lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	createHeaderWaypoint() {
		const element = this.$headerTrigger[0];
		const header = this.$siteHeader;
		new Waypoint({
			element: element,
			handler: function(direction) {
				if (direction === 'down') {
					header.addClass('site-header--dark');
				} else {
					header.removeClass('site-header--dark');
				}
			}
		})
	}

	createPageSectionWaypoints() {
		let headerLinks = this.$headerLinks;
		let stickyHeader = this;
		this.$pageSections.each(function() {
			let section = this;
			stickyHeader._createSingleSectionWaypoints(section, headerLinks);
		});
	}

	_createSingleSectionWaypoints(section, headerLinks) {
		new Waypoint({
			element: section,
			offset: "18%",
			handler: function(direction) {
				if (direction === "down"){
					headerLinks.removeClass('is-current-link');
					let headerLink = section.getAttribute('data-matching-link');
					$(headerLink).addClass('is-current-link');
				}
			}
		});

		new Waypoint({
			element: section,
			offset: "-40%",
			handler: function(direction) {
				if (direction === "up"){
					headerLinks.removeClass('is-current-link');
					let headerLink = section.getAttribute('data-matching-link');
					$(headerLink).addClass('is-current-link');
				}
			}
		});
	}
}