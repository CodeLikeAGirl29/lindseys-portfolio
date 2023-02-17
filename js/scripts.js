/*
  [JS Index]
*/


/*
  1. preloader
  2. show elements
    2.1. page loaded
    2.2. page ready
  3. slick slider
  4. navigation
  5. animate elements
  6. YouTube player
  7. typed text
  8. owl carousel
  9. swiper slider
  10. form
	11. scroll to top button
*/


$(function() {
	"use strict";
	
	
	$(window).on("load", function() {
		// 1. preloader
		$("#preloader").fadeOut(600);
		$(".preloader-bg").delay(400).fadeOut(600);
		
		// 2. show elements
		// 2.1. page loaded
		setTimeout(function() {
			$("body").addClass("page-loaded");
		}, 400);
		// 2.2. page ready
		$("body").addClass("page-ready");
		
		// 3. slick slider
		$(".slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: ".home-img-container",
			pauseOnHover: true,
			speed: 800,
			variableWidth: true,
			infinite: false,
			autoplay: true,
			autoplaySpeed: 8000
		});
		$(".home-img-container").slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: ".slider",
			dots: false,
			pauseOnHover: true,
			speed: 600,
			variableWidth: true,
			infinite: false,
			autoplay: true,
			autoplaySpeed: 8000
		});
	});
	
	// 4. navigation
	$(".page-scroll").on("click", function(e) {
		var $anchor = $(this);
		$("html, body").stop().animate({
			scrollTop: $($anchor.attr("href")).offset().top - 0
		}, 1500, 'easeInOutExpo');
		e.preventDefault();
	});
	$(".navigation-fire, nav.navigation-menu a").on("click", function() {
		if ($("nav.navigation-menu").hasClass("show")) {
			$("nav.navigation-menu").removeClass("show");
		} else {
			$("nav.navigation-menu").addClass("show");
		}
	});
	
	$(window).on("scroll", function() {
		// 5. animate elements
		if ($(this).scrollTop() > 300) {
			$(".to-top-arrow").addClass("show");
			$(".round-menu").addClass("direction");
		} else {
			$(".to-top-arrow").removeClass("show");
			$(".round-menu").removeClass("direction");
		}
	});
	
	// 6. YouTube player
	$("#bgndVideo").YTPlayer();
	
	// 7. typed text
	$(".typed-title").typed({
		strings: ["Fully Responsive", "Photography Portfolio", "Made for KINGS"],
		typeSpeed: 35,
		backDelay: 4500,
		loop: true
	});
	
	// 8. owl carousel
	$("#owl-carousel-team").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		// nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-team',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			},
			2560: {
				items: 3,
				margin: 50
			}
		}
	});
	$("#owl-carousel-projects").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-projects',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			}
		}
	});
	$("#owl-carousel-news").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		// nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-news',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			}
		}
	});
	$("#owl-carousel-news-1").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		// nav: false,
		nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-1',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			}
		}
	});
	$("#owl-carousel-news-2").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		// nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-2',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			}
		}
	});
	$("#owl-carousel-news-3").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-3',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			}
		}
	});
	$("#owl-carousel-news-4").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		// nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-4',
		responsive: {
			0: {
				items: 1,
				margin: 25
			},
			768: {
				items: 1,
				margin: 50
			},
			980: {
				items: 1,
				margin: 50
			},
			1240: {
				items: 2,
				margin: 50
			}
		}
	});
	
	// 9. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
    swiper.on("slideChangeTransitionStart", function () {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function () {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function () {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
	// 10. form
	$("form#form").on("submit", function() {
		$("form#form .error").remove();
		var s = !1;
		if ($(".requiredField").each(function() {
				if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass("inputError"), s = !0;
				else if ($(this).hasClass("email")) {
					var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass("inputError"), s = !0);
				}
			}), !s) {
			$("form#form input.submit").fadeOut("normal", function() {
				$(this).parent().append("");
			});
			var r = $(this).serialize();
			$.post($(this).attr("action"), r, function() {
				$("form#form").slideUp("fast", function() {
					$(this).before('<div class="success">Your email was sent successfully.</div>');
				});
			});
		}
		return !1;
	});
	
	
});

// 11. scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

document.addEventListener("scroll", handleScroll)

