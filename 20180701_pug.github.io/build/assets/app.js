// console.log('init')

// var request = new XMLHttpRequest();
// request.open('GET', 'http://www.mocky.io/v2/5b4f6fe23600004a00dd0b12', true);

// request.onload = function() {
//       console.log(JSON.parse(request.responseText));
//     // var data = JSON.parse(request.responseText);
// };

// request.send();



/*!
	Autosize 4.0.0
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(i!==t?"hidden"===o.overflowY&&(n("scroll"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(n("hidden"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,c=function(){e.clientWidth!==u&&l()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:p,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});
$(document).ready(function () {
    $(".form_field_wrapper").children('input').focus(function () {
        if ($(this).val() == '') {
            $(this).parent().children('label').removeClass('hide--input')
        };
        $(this).parent().children('label').addClass('active--input');
        $(this).parent().addClass('focus--input');
    });

    $(".form_field_wrapper").children('input').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().children('label').removeClass('active--input')
        };
        if ($(this).val() == '') {
            $(this).parent().children('label').addClass('hide--input')
        };
        $(this).parent().removeClass('focus--input');
    });
});


$(document).ready(function () {
    $(".input").children('textarea').focus(function () {
        if ($(this).val() == '') {
            $(this).parent().children('label').removeClass('hide--input')
        };
        $(this).parent().children('label').addClass('active--input');
        $(this).parent().addClass('focus--input');
    });

    $(".input").children('textarea').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().children('label').removeClass('active--input')
        };
        if ($(this).val() == '') {
            $(this).parent().children('label').addClass('hide--input')
        };
        $(this).parent().removeClass('focus--input');
    });
});

$(document).ready(function () {
    autosize($('textarea'));
});


$(document).ready(function () {
    $(".input").children('input').focus(function () {
        if ($(this).val() == '') {
            $(this).parent().children('span').removeClass('hide--input')
        };
        $(this).parent().children('span').addClass('active--input');
        $(this).parent().addClass('focus--input');
    });

    $(".input").children('input').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().children('span').removeClass('active--input')
        };
        if ($(this).val() == '') {
            $(this).parent().children('span').addClass('hide--input')
        };
        $(this).parent().removeClass('focus--input');
    });
});


$(document).ready(function () {
    $(".input").children('textarea').focus(function () {
        if ($(this).val() == '') {
            $(this).parent().children('span').removeClass('hide--input')
        };
        $(this).parent().children('span').addClass('active--input');
        $(this).parent().addClass('focus--input');
    });

    $(".input").children('textarea').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().children('span').removeClass('active--input')
        };
        if ($(this).val() == '') {
            $(this).parent().children('span').addClass('hide--input')
        };
        $(this).parent().removeClass('focus--input');
    });
});

$(document).ready(function () {
    autosize($('textarea'));
});

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
if ($('.main-page').length || $('.error-page').length ) {
	$('header').addClass('header__dark-bg');
	$('header').removeClass('header__light-bg');
} else {
	$('header').addClass('header__light-bg');
	$('header').removeClass('header__dark-bg');
}

/* ======== popup ========  */

if ($('.pop-up-btn').length) {

(function () {
    var wrapPopup = document.querySelector('.popup-block');
    var popup = document.querySelector('.popup-block');
    var close = document.querySelector('.close');
    var closeBtn = document.querySelector('.close-btn');
    var btnClass = 'pop-up-btn';
    var body = document.querySelector('body');

        function showPopup() {
            popup.classList.add('visible-popup');
            body.classList.add('no-scroll');
        }
        close.addEventListener('click', hidePopup);
        // closeBtn.addEventListener('click', hidePopup);


        function hidePopup() {
            popup.classList.remove('visible-popup');
            body.classList.remove('no-scroll');
        }

        window.addEventListener('click', removePopup);
          function removePopup(e) {
            var target = e.target;
            if (target == wrapPopup) {
                hidePopup();
            }
        }
    // -- Jquery variant
    // -- $('.' + btnClass).click(showPopup);

    // -- PureJs variant
    var btnPopup = document.getElementsByClassName(btnClass);
    for(var i = 0; i < btnPopup.length; i++) {
        btnPopup[i].addEventListener('click', showPopup, false);
    }
  })();
};

if ($('.close-btn').length) {
    (function () {
    var wrapPopup = document.querySelector('.popup-block');
    var popup = document.querySelector('.popup-block');
    var close = document.querySelector('.close');
    var closeBtn = document.querySelector('.close-btn');
    var btnClass = 'pop-up-btn';
    var body = document.querySelector('body');

        function showPopup() {
            popup.classList.add('visible-popup');
            body.classList.add('no-scroll');
        }
        close.addEventListener('click', hidePopup);
        closeBtn.addEventListener('click', hidePopup);


        function hidePopup() {
            popup.classList.remove('visible-popup');
            body.classList.remove('no-scroll');
        }

        window.addEventListener('click', removePopup);
          function removePopup(e) {
            var target = e.target;
            if (target == wrapPopup) {
                hidePopup();
            }
        }

    var btnPopup = document.getElementsByClassName(btnClass);
    for(var i = 0; i < btnPopup.length; i++) {
        btnPopup[i].addEventListener('click', showPopup, false);
    }
  })();
}

/* ======== popup END ========  */

