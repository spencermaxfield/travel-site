import $ from 'jquery';

export default class Modal {
	constructor() {
		this.$openModalButton = $('.open-modal');
		this.$modal = $('.modal');
		this.$closeModalButton = $('.modal__close');

		this.$openModalButton.click(this.openModal.bind(this));
		this.$closeModalButton.click(this.closeModal.bind(this));
		$(document).keyup(function(e) {
			if (e.keyCode === 27) {
				this.closeModal();
			}
		}.bind(this))
	}


	openModal() {
		this.$modal.addClass('modal--is-visible');
		return false;
	}

	closeModal() {
		this.$modal.removeClass('modal--is-visible');
		return false;
	}
}