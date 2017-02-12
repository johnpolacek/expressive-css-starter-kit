$(function() {
	$('body')
		.on('click','#createAccount',function() {
			$('#signInContainer')
				.addClass('transparent').removeClass('marg-3-top-neg').addClass('marg-3-top')
				.delay(250)
				.queue(function() {
					$(this).addClass('hidden').dequeue();
					next();
				});
			$('#createAccountContainer').addClass('transparent').addClass('marg-3-top').delay(251)
				.queue(function() {
					$(this).removeClass('marg-3-top').removeClass('hidden').dequeue();
				}).delay(1).queue(function() {
					$(this).addClass('marg-3-top-neg').removeClass('transparent').dequeue();
				});			
		});
});