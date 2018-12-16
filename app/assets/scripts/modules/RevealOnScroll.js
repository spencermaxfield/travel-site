import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class RevealOnScroll {
	constructor(itemsToReveal, offset) {
		this.itemsToReveal= itemsToReveal;
		this.offset = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		const offset = this.offset;
		this.itemsToReveal.each(function() {
			const item = this;
			new Waypoint({
				element: item,
				offset: offset,
				handler: function() {
					$(item).addClass("reveal-item--is-visible");
				}
			})
		});
	}
}