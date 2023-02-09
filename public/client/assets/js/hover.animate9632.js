jQuery(document).ready(function ($) {



	// Banner Moving JS Start
	var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
		translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

		$('.medi-animate_hover').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
		});

		window.requestAnimationFrame(moveBackground);
	}

	$(window).on('mousemove click', function(e) {
		
		var isHovered = $('.medi-animate_hover:hover').length > 0;
		console.log(isHovered);
		
		//if(!$(e.target).hasClass('medi-animate_hover')) {
		if(!isHovered) {
			var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
					lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

			lFollowX = (20 * lMouseX) / 100;
			lFollowY = (10 * lMouseY) / 100;
		}
	});

	moveBackground();
	
	
});
	// Banner Moving JS End