jQuery(window).on('load', function(){

	// Aplica as imagens de fundo a partir do data-img-url
	jQuery('*[data-img-url]').each(function(){
		var element = jQuery(this);
		var url = element.data('img-url');

		if (url) {
			element.css({
				'background-image': 'url(' + url + ')',
				'background-size': 'cover',
				'background-position': 'center center',
				'background-repeat': 'no-repeat'
			});
		}
	});

	// Preloader que funciona no mobile e desktop
	var preloader = jQuery('#preloader');
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.fadeOut(500, function() {
				preloader.remove();
			});
		}, 2000);
	} else {
		preloader.fadeOut(300, function() {
			preloader.remove();
		});
	}

	// Scroll personalizado só em desktop
	var element = jQuery('.scrollable');
	if (!isMobile) {
		element.niceScroll({
			touchbehavior: false,
			cursorwidth: 0,
			autohidemode: true,
			cursorborder: "0px solid #fff"
		});
	} else {
		element.css('overflow-y', 'auto');
	}
});
