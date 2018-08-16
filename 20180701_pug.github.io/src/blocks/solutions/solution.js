
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

