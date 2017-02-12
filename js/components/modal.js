$(function() {
	$('body')
		.on('click','*[data-modal]',function(e) {
			e.preventDefault();
			var $modalContainer = $('#'+$(this).attr('data-modal'))
				.height($(document).height())
				.removeClass('hidden');

			var $modal = $modalContainer.find('.modal'),
				panelHeight = $modal.outerHeight(),
				viewportHeight = $(window).height(),
				viewportTop = $(window).scrollTop(),
				viewportBottom = viewportTop + viewportHeight,
				centerOffset = panelHeight + 64 > viewportHeight ? 32 : (viewportHeight - panelHeight - 32) / 2,
				viewportY = viewportTop + centerOffset;

			$modal.css('margin-top',viewportY);
		})
		.on('click','*[data-modal-close]',function(e) {
			e.preventDefault();
			$(this).parents('.overlay').addClass('hidden');
		});
});