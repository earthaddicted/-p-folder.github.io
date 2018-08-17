$(document).ready(function() {

    if ($('.owl-carousel').length > 0) {
        $('.owl-carousel').owlCarousel({
            dots: false,
            loop: true,
            items: 4,
            autoplay: false,
            center: false,
            margin: 60,
            nav: true,
            navText: ['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>', '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'],
            responsive: {
                0: {
                    items: 1,
                    center: true,
                    margin: 10,
                    autoWidth: true

                },
                480: {
                    items: 1,
                    center: true,
                    margin: 20,
                    // responsiveClass: true,
                    autoWidth: true
                },
                1024: {
                    // nav: true,
                    items: 4,
                    center: false,
                    margin: 60,

                },
                1440: {
                    items: 4,
                    center: false,
                }


            }
        });
    }
});

/* logo for diff pages */
$(document).ready(function() {
    if ($('.product-page__w').length > 0) {
        $(".prod-logo img").attr("src", "images/logo/logo-g.png");
    } else if ($('.product-page__m').length > 0) {
        $(".prod-logo img").attr("src", "images/logo/logo-b.png");
    } else {
        $(".prod-logo img").attr("src", "images/logo/logo-r.png");
    }
});

/* form steps range  */
// weight
(function($) {
    $(document).ready(function() {
        $('.input-range__weight').each(function() {
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if (separator !== -1) {
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                value = parseFloat(value);
            }
            $(this).slider({
                formatter: function(value) {
                    console.log(value);
                    return value + 'g';
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: value,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip')
            });
        });
    });
})(jQuery);

// height
(function($) {
    $(document).ready(function() {
        $('.input-range__height').each(function() {
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if (separator !== -1) {
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                value = parseFloat(value);
            }
            $(this).slider({
                formatter: function(value) {
                    console.log(value);
                    return value + 'sm';
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: value,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip')
            });
        });
    });
})(jQuery);

// style play video button
$('.video').parent().click(function () {
  if($(this).children(".video").get(0).paused){ $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});

