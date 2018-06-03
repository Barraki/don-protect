$(function () {

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
		}

		$('.nextT').click(nextSlide)
		$('.prevV').click(prevSlide)


		$(document).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$('.nav').addClass("nav-fixed");
				$('.logo').removeClass("col-2");
				$('.soc-nav').removeClass("offset-2");
				$('.nav-block').addClass("offset-1");
				$('.logo').addClass("col-3");
				$('.img_logo').addClass("logo-fixed");
				$('.logo_text').css('display', 'block');
			} else {
				$('.nav').removeClass("nav-fixed");
				$('.img_logo').removeClass("logo-fixed");
				$('.logo').removeClass("logo-fixed");
				$('.logo').removeClass("col-3");
				$('.logo').addClass("col-2");
				$('.soc-nav').addClass("offset-2");
				$('.nav-block').removeClass("offset-1");
				$('.logo_text').css('display', 'none');
			}
		});

		$("#slider1").tinycarousel({
			axis: "y",
			animationTime: 450
		});

	})
});