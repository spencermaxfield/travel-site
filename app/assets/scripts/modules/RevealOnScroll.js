import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class RevealOnScroll {
	constructor() {
		this.$itemsToReveal = $(".feature-item");
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.$itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		this.$itemsToReveal.each(function() {
			const item = this;
			new Waypoint({
				element: item,
				offset: "85%",
				handler: function() {
					$(item).addClass("reveal-item--is-visible");
				}
			})
		});
	}
}