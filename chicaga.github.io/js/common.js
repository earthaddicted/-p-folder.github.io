$(document).ready(function () {
    // var menuIcon = $('.menu-hamburger');
    // var burger = $('.mobile-menu-icon');


	//PHONE MASK
	 $('#phone_mask').mask('(+7) 000-000-00-00');
     $('input[type="number"]').mask('(+7) 000-000-00-00');

    //Universal E-mail Ajax Send
	$("#free_lesson").submit(function() { //Change
		var th = $(this);
		$(".my_school_value").val($(".selected_school").text());
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			try {
				yaCounter41687069.reachGoal('order', {
					"school": $(".selected_school").text(),
					"name": $("#first_input").val(),
					"phone": $("#phone_mask").val()
				});
				ga('send', 'event', 'formorder', 'send' );
			} catch(e) {}
			alert("Спасибо! Ваша заявка отправлена");		
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();				
			}, 1000);
            if(window.location.pathname != '/'){
            window.location.replace("http://skillset-english-school.ru");
          }
		});
		return false;
	});
	
	$("#school_select ul li").click(function () {
        $(".selected_school").html($(this).text());
    });


    //POPUP VIDEO YOUTUBE

        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
			
            fixedContentPos: false
        });
    
    $("#school_select").click(function () {
        $(this).toggleClass('active');
    });

    $(".menu_block").click(function () {
        $("#nav-icon3").toggleClass('open');
    });

    $('.reviews_wrap').slick({
        slidesToShow: 2,
        autoplaySpeed:4000,
        autoplay:true,
        infinity:true,
        dots:true,

        responsive:[
    {
        breakpoint: 991,
        settings:{
            slidesToShow:1,
            slidesToScroll:1,
            autoplaySpeed:4000,
        autoplay:true,
        infinity:true,
        dots:true
        }

    }
    ]
    });

        /*review*/
   /* $('.reviews_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed:4000,
    autoplay:true,
    infinity:true,
    dots:true,
    // prevArrow: '<img class="arrow_right" src="/wp-content/themes/SkillsetTheme/img/arrow_left.png">',
    // nextArrow: '<img class="arrow_left" src="/wp-content/themes/SkillsetTheme/img/arrow_right.png">',

    responsive:[
    {
        breakpoint: 991,
        settings:{
        slidesToShow:1,
        slidesToScroll:1,
        // autoplaySpeed:4000,
        autoplay:true,
        infinity:true,
        // dots:true
        }

    }
    ]
    });*/

    // $('.owl_page img'){
    //     $(this).animate('height':'105%',4000);
    //     $(this).animate('widht':'105%',4000);
    // }

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: 3000,
        smartSpeed: 1000,
        transitionStyle: 'fade'
    });

    $(".menu_block").click(function () {

        if ($(".header_wrap_nav").is(":visible")) {
            $(".header_wrap_nav").fadeOut(600);
            $(this).css("border-color","#ddae79");
            $(this).css("background-color","#fff");
        } else {
            $(".header_wrap_nav").fadeIn(600);
            $(this).css("border-color","transparent");
            $(this).css("background-color","#000");
        }

    });

    // teenagers page mob menu
    // burger.click(function() {
    //     menuIcon.toggleClass('open');
    //     // header.toggleClass('open');
    //     // social.toggleClass('open-social');
    //     // socialMain.toggleClass('open-social');
    // });

    // teenagers page mob menu END


    $(".header_wrap_nav ul li a").click(function () {

        if ($(".header_wrap_nav").is(":visible")) {
            $(".header_wrap_nav").fadeOut(600);
            if ($("#nav-icon3").hasClass("open")) {
                $("#nav-icon3").removeClass("open");
                $(".menu_block").css("background-color","#fff");
                $(".menu_block").css("border-color","#ddae79");
            }
        } else {
            $(".header_wrap_nav").fadeIn(600);
        }

    });
    /*TEACHERS OWL*/
    $('.teachers').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    prevArrow: '<img class="arrow_right" src="/wp-content/themes/SkillsetTheme/img/arrow_left.png">',
    nextArrow: '<img class="arrow_left" src="/wp-content/themes/SkillsetTheme/img/arrow_right.png">',

    responsive:[
    {
        breakpoint: 991,
        settings:{
            slidesToShow:1,
            slidesToScroll:1
        }

    }
    ]
    });
    /* ******** */
    /* TEST */
    $('.popup_form').magnificPopup();

    $(".menu_block_test").click(function () {

        if ($(".header_wrap_nav_test").is(":visible")) {
            $(".header_wrap_nav_test").fadeOut(600);
            $(this).css("border-color","#ddae79");
            $(this).css("background-color","#fff");
        } else {
            $(".header_wrap_nav_test").fadeIn(600);
        }

    });

    $("#close").click(function(){
        $(".header_wrap_nav_test").fadeOut(600);
    });

    $(".header_wrap_nav_test ul li a").click(function () {

        if ($(".header_wrap_nav_test").is(":visible")) {
            $(".header_wrap_nav_test").fadeOut(600);
            if ($("#nav-icon3-test").hasClass("open")) {
                $("#nav-icon3-test").removeClass("open");
                $(".menu_block_test").css("background-color","#fff");
                $(".menu_block_test").css("border-color","#ddae79");
            }
        } else {
            $(".header_wrap_nav_test").fadeIn(600);
        }

    });

    /* **** */

    $('.popup_form').magnificPopup({
        type: 'inline',
        focus: '#first_input'
    });

    $(".up_btn").mPageScroll2id();
    $(".scroll_btn").mPageScroll2id();

    if ($(window).width() < '1140' && $(window).width() > '480') {
        $(".video_block").height($(".test_block").outerHeight());
    } else {
        $(".video_block").height(228);
    };

    /*ANIMATION SCRIPTS*/

    jQuery('.action_block_txt').viewportChecker({
        classToAdd: 'active',
        offset: '10%',
        repeat: true
    });

    jQuery('.students_target').viewportChecker({
        classToAdd: 'active',
        offset: '10%',
        repeat: true
    });

});

$(window).resize(function () {

    if ($(window).width() < '1140' && $(window).width() > '480') {
        $(".video_block").height($(".test_block").outerHeight());
    } else {
        $(".video_block").height(228);
    };

});

$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});


