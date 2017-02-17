_G.modal = (function() {
	$(function() {
		$('body')
			.on('click','*[data-modal]',function(e) {
				e.preventDefault();
				openModal($('#'+$(this).attr('data-modal')));
			})
			.on('click','*[data-modal-close]',function(e) {
				e.preventDefault();
				closeModal($(this).parents('.overlay'));
			});
	});

	function openModal($modal) {
		var $modalPanel = $modal.find('.modal-panel');
		$modal
			.height($(document).height())
			.removeClass('hidden animate-all')
			.addClass('transparent')
			.delay(1).queue(function(){
				$modal.addClass('animate-all');
				$modalPanel.css('margin-top',viewportY);
				$(this).removeClass('transparent').css('top',0).dequeue();
			});

		var panelHeight = $modalPanel.outerHeight(),
			viewportHeight = $(window).height(),
			viewportTop = $(window).scrollTop(),
			viewportBottom = viewportTop + viewportHeight,
			centerOffset = panelHeight + 64 > viewportHeight ? 32 : (viewportHeight - panelHeight - 32) / 2,
			viewportY = viewportTop + centerOffset;

		$modalPanel.css('margin-top',viewportY+32);
	}

	function closeModal($modal) {
		$modal.addClass('transparent').delay(500).queue(function(){
			$(this).addClass('hidden').dequeue();
		});
	}

	return {
		open: function(modalId) {
			openModal($('#'+modalId));
		},
		close: function() {
			closeModal('.overlay:visible');
		},
		remove: function(modalId) {
			$('#'+modalId).parents('.overlay').remove();
		}
	};
}());