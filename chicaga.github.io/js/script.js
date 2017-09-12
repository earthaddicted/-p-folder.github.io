$(document).ready(function() {
	var button = $('.go-top');

	button.click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});

$(document).ready(function() {
	var menuIcon = $('.menu-hamburger');
	var header = $('header');
	var burger = $('.mobile-menu-icon');
	var menuAncor = $('.header__nav a');

		burger.click(function() {
		    menuIcon.toggleClass('open');
		    header.toggleClass('open');
		});

		menuAncor.click(function() {
		    header.toggleClass('open');
		    menuIcon.toggleClass('open');
		});
});

function show(state) {
	'use strict';
	document.getElementsByClassName('wrap')[0].style.display = state;
	document.getElementsByClassName('popup-item')[0].style.display = state;
}

$(document).ready(function() {
	var btnPopup = $('.btn-popup');
	var animatedBtn = $('.animated_btn');
	var wrapForm = $('.wrap-form'); 

	btnPopup.click(function() {
	    wrapForm.toggleClass('open');
	});
});


$(document).ready(function() {
	$(".close").click(function() {
        $(".wrap-form").toggleClass('open');
    });
});

// open thanks form
// $(document).ready(function() {
//     $('.wpcf7-submit').on('click', function() { $('.thanks-popup').addClass('open');
// 	});
// });

// // close thanks form
// $(document).ready(function() {
//     $('.close__thanks-form').on('click', function() { $('.thanks-popup').removeClass('open');
// 	});
// });

// open wrapper around thank form
$(document).ready(function() {
	$(".wpcf7-submit").click(function() {
        $(".wrap-thanks-form").toggleClass('open');
    });

     $(".scroll_btn").mPageScroll2id();
});

$(document).ready(function() {
	$(".close__thanks-form").click(function() {
        $(".wrap-thanks-form").toggleClass('open');
    });
});


/* kids gallery slider */
$(document).ready(function() {
	$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	responsive: [
	    	{
	      		breakpoint: 968,
		      	settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      	}
		    },
			{
		  		breakpoint: 730,
		      	settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		    	} 
			},

			{
		  		breakpoint: 460,
		      	settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		    	} 
			}
		] 

	});

});	

