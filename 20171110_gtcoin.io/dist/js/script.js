
/* scroll for sections*/

$(".scroll_btn").mPageScroll2id();

/* scroll for sections END*/


/* gsap animation */
$(document).ready(function(){

var controller = new ScrollMagic.Controller();

/* gsap animation END */

var tlPopupBlocks = new TimelineMax();
var elements = $('.roadmap-wrapper').children();

tlPopupBlocks

    .staggerFrom(elements, 0.3, {
            y: 200,
           yoyo: true,
           opacity:0,
           rotation:0.01,
            force3D:true,
           ease: Back.easeOut.config(1.7)
           }
         , 0.3)

    var appearSectionsController = new ScrollMagic.Controller();

    //build a scene
    var appearSectionScene = new ScrollMagic.Scene ({
        triggerElement: '.roadmap-wrapper  div',
        triggerHook: 0.8,
        duration: '230%',
        reverse: true
    })
    .setTween(tlPopupBlocks)
    .addTo(appearSectionsController);
});


/* for svg change color on hover */

$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});

/* for svg change color on hover END */

/* mob header */
$(function(){
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
 });

$(document).on('click', 'header .menu-wrapper ul a', function(event) {
    // event.preventDefault();
    $("header .mobile-menu-icon").click();
});

$(document).ready(function() {
    var menuIcon = $('.menu-hamburger');
    var header = $('header');
    var headerMenu = $('.menu-wrapper');
    var burger = $('.mobile-menu-icon');
    var menuAncor = $('.header__nav a');

    burger.click(function() {
        menuIcon.toggleClass('open');
        headerMenu.toggleClass('open');
    });

});

/* mob header END */