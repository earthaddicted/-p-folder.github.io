
/* ===== HEADER ====== */
$(function() {
    var navMain = $(".header__wrapper");
    var menuIcon = $('.menu-decor__hamburger');
    var header = $('.header__wrapper');

    navMain.on("click", "a", null, function() {
        navMain.toggleClass('open');
        menuIcon.toggleClass('open');
    });
});

$(document).on('click', 'header .menu-wrapper ul a', function(event) {
    $("header .menu-decor").click();
});

$(document).ready(function() {
    var header = $('.header__wrapper');
    var menuIcon = $('.menu-decor');
    var body = $('body');

    menuIcon.click(function() {
        header.toggleClass('open');
        body.toggleClass('no-scroll');
    });
});

// console.log('test header');
/* ===== HEADER END ====== */