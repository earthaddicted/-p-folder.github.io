$(document).ready(function() {
    var searchitem = $('.header__search-item');
    var closeSearch = $('.search__close');
    var	search = $('.soc-search__search');
    var mobmenu = $('.info-menu-wrapper > ul:first-of-type li');
    var infomenu = $('.info-menu');
    var infoMenuDropdown2 = $('.info-menu li:nth-child(2)');
    var infoMenuDropdown4 = $('.info-menu li:nth-child(4)');
    var infoMenuDropdownUl2 = $('.info-menu > li:nth-child(2) > ul');
    var infoMenuDropdownUl4 = $('.info-menu > li:nth-child(4) > ul');

	$('.mainslider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

 	mobmenu.click(function() {
    infomenu.toggleClass('open');
    });
    
    infoMenuDropdown2.click(function() {
    infoMenuDropdownUl4.removeClass('open');
    infoMenuDropdownUl2.toggleClass('open');
    });

    infoMenuDropdown4.click(function() {
    infoMenuDropdownUl2.removeClass('open');
    infoMenuDropdownUl4.toggleClass('open');
    });

     $('.soc-search__search, .search__close').click(function() {
    	searchitem.toggleClass('open');
    });

});