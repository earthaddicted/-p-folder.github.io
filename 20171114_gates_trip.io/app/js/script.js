
/* scroll for sections*/

$(".scroll_btn").mPageScroll2id();

/* scroll for sections END*/


/* gsap animation */
$(document).ready(function(){


var controller = new ScrollMagic.Controller();
//parallax scene

var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 1,
    duration: '700%'
})
    .setTween(TweenMax.from('.page-wrapper', 1, {y: "-30%", ease: Power1.easeInOut}))
    .addIndicators()
    .addTo(controller);


/* gsap animation END */

var tlPopupBlocks = new TimelineMax();

tlPopupBlocks
    .from('.section-roadmap h2', 1.5, {opacity:0, y: "60%",  ease: Back.easeInOut.config(4.7)})
    .staggerFrom('.roadmap-block-container', 0.8, {
        yoyo: true,
        opacity:0,
        ease: Back.easeInOut.config(4.7) }
        , 0.8)
.from('.roadmap-block-container', .6, {y:-400, ease: Back.easeInOut.config(4.7)}, "-=0.8") 

var appearSectionsController = new ScrollMagic.Controller();
   




/**/

    $('.roadmap-block-container').each(function() {

        //build a scene
        var appearSectionScene = new ScrollMagic.Scene ({
            triggerElement: this.children[0],
            triggerHook: 0.8
        })
        .setTween(this, tlPopupBlocks)
        .addTo(appearSectionsController);
    });

});

/*copy */

// /* scroll for sections*/

// $(".scroll_btn").mPageScroll2id();

// /* scroll for sections END*/


// /* gsap animation */
// $(document).ready(function(){


// var controller = new ScrollMagic.Controller();
// //parallax scene

// var slideParallaxScene = new ScrollMagic.Scene({
//     triggerElement: 'body',
//     triggerHook: 1,
//     duration: '700%'
// })
//     .setTween(TweenMax.from('.page-wrapper', 1, {y: "-30%", ease: Power1.easeInOut}))
//     // .addIndicators()
//     .addTo(controller);


// /* gsap animation END */

// var tlPopupBlocks = new TimelineMax();

// tlPopupBlocks
//     .from('.section-roadmap h3', 1.5, {opacity:0, y:-30})
//     .staggerFrom('.roadmap-block-container', 0.8, {
//         // cycle: {
//         //     y: [-40, 60, -100, -140, -160, -200, -240, ] // for diff appearance
//         // },
//         y: 0,
//         // repeat: -1,
//         yoyo: true,
//         opacity:0 }
//         , 0.8, 0.3)
// // .from('.roadmap-block-container', .6, {y:-400, ease: Expo.easeOut}, "-=0.8") 

// var appearSectionsController = new ScrollMagic.Controller();
   

//    var appearSectionScene = new ScrollMagic.Scene ({
//     triggerElement: ".section-roadmap h2",
//     offset: 150
//    })
    
//     .setTween(tlPopupBlocks)
//     .addIndicators()
//     .addTo(appearSectionsController);
    
// });

