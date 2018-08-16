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