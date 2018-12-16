import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class StickyHeader {
	constructor() {
		this.$siteHeader = $('.site-header');
		this.$headerTrigger = $('.large-hero__title');
		this.crateHeaderWaypoint();
	}

	crateHeaderWaypoint() {
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
}