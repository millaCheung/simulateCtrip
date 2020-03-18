$(function () {
    $('.country-code-index-box span').on('click',function () {
        var index = $(this).data('index');
        var scrollY = $('#' + index).position().top ;
        $('.country-code-select').scrollTop(scrollY);
    });

    $('.login-box li').eq(0).on('click', function () {
        $('.country-code-box').show();
    });

    $('.country-code-box-hd span').on('click', function () {
        $('.country-code-box').hide();
    });

    $('.country-code-group-list li').on('click', function () {
        var text = $(this).children('span').text() + ' ' + $(this).children('em').text();
        console.log(text);
        $('.login-box>li:eq(0)>span').text(text);
        $('.country-code-box').hide();
    });

    $('.login-hd-back').on('click', function () {
        $.ajax({
            url: './home.html',
            success(data) {
                if (data) {
                    window.location.href = './home.html';
                }
            }
        })
    });

    $('.login-box-ipt').on('focus', function () {
        if ($(this).val() !== '') {
            $(this).siblings('.clear-input').show();
        }
    });

    $('.login-box-ipt').on('input', function () {
        if ($(this).val() !== '') {
            $(this).siblings('.clear-input').show();
        } else {
            $(this).siblings('.clear-input').hide();
        }
    });

    $('.clear-input').on('mousedown', function () {
        $(this).siblings('.login-box-ipt').val('').focus();
        $(this).hide();
    });


    $('.login-box-ipt').on('blur', function () {
        $(this).siblings('.clear-input').hide();
    });
});