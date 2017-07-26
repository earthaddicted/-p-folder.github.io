$(document).ready(function() {
	var menuIcon = $('.menu-hamburger');
	var header = $('header');
	var	social = $('.header__social-row');
	var	socialMain = $('.header__social');
    var	burger = $('.mobile-menu-icon');

    var searchitem = $('.header__search-item');
    var	search = $('.header__search');
    var closeSearch = $('.search__close');

	$('.mainslider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.initiatives-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
				    {
				      breakpoint: 669,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      } 
				    }
				  ]
	});
	$('.step-paragraph-block').dotdotdot({
		ellipsis	: '  '
	});

	burger.click(function() {
        menuIcon.toggleClass('open');
        header.toggleClass('open');
        social.toggleClass('open-social');
        socialMain.toggleClass('open-social');
    });

    $('.header__search, .search__close').click(function() {
    	searchitem.toggleClass('open');
    });

});