if ($('.main-page').length || $('.error-page').length ) {
	$('header').addClass('header__dark-bg');
	$('header').removeClass('header__light-bg');
} else {
	$('header').addClass('header__light-bg');
	$('header').removeClass('header__dark-bg');
}