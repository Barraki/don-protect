$(function () {

	$(document).ready(function () {
		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 1500,
			outDuration: 800,
			linkElement: '.animsition-link',
			// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			loading: true,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: ['animation-duration', '-webkit-animation-duration'],
			// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay: false,
			overlayClass: 'animsition-overlay-slide',
			overlayParentElement: 'body',
			transition: function (url) {
				window.location.href = url;
			}
		});
	});

	$(window).ready(function () {
		var width = $('.slider-img').width()
		var height = $('.change_block').height()

		$('.slider-wrap>img').width(width);
		$('.slider-wrap').width(width * $('.slider-wrap>img').length);

		$('.slider-wrap').css('left', -width);
		$('.slider-wrap>img:last-child').prependTo('.slider-wrap');

		function nextSlide() {
			$('.slider-wrap').animate({
				'margin-left': -width
			}, 500, function () {
				$('.slider-wrap>img:first-child').appendTo('.slider-wrap');
				$('.slider-wrap').css('margin-left', 0);
			});

			$('.change_block').animate({}, 300, function () {
				$('.change_block>div:first-child').appendTo('.change_block');
			});


		}

		function prevSlide() {
			$('.slider-wrap').animate({
				'margin-left': width
			}, 500, function () {
				$('.slider-wrap>img:last-child').prependTo('.slider-wrap');
				$('.slider-wrap').css('margin-left', 0);
			});

			$('.change_block').animate({}, 300, function () {
				$('.change_block>div:first-child').appendTo('.change_block');
			});
		}

		$('.nextT').click(nextSlide)
		$('.prevV').click(prevSlide)



		function resizeScrenn() {
			if ($(window).width() >= 1200) {
				$(document).ready(function () {
					$(document).scroll(function scrollPage() {
						if ($(this).scrollTop() > 1) {
							$('.nav').addClass("nav-fixed");
							$('.logo').removeClass("col-xl-2");
							$('.logo').addClass("col-xl-3");
							$('.img_logo').addClass("logo-fixed");
							$('.logo_text').css('display', 'block');
						} else { 
							$('.nav').removeClass("nav-fixed");
							$('.img_logo').removeClass("logo-fixed");
							$('.logo').removeClass("logo-fixed");
							$('.logo').removeClass("col-xl-3");
							$('.logo').addClass("col-xl-2");
							$('.logo_text').css('display', 'none');
						}
					});
				});
			}
		}
		resizeScrenn();
		$(window).resize(function () {
			resizeScrenn();
		});



		$("#slider1").tinycarousel({
			axis: "y",
			animationTime: 450
		});


		$(function ($) {
			$('.hamburger').click(function () {
				$('.fixed_window').toggleClass('active_window');
				$('.fa-bars').toggleClass('fa-times');
				$('.fa-times').toggleClass('fa-bars');
				if ($('.hamburger').hasClass('active_window'))
					$('html, body').animate({
						scrollTop: 0
					}, 500);
				$('html').toggleClass('no-scroll');
			});
		});

		$(".search_button").click(function (){
			$("#___gcse_0").toggleClass("active")
		})

	})
});