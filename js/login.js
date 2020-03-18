$(function () {
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

    $('.login-hd-register').on('click', function () {
        console.log('haha');
        $.ajax({
            url: './register.html',
            success(data) {
                if (data) {
                    window.location.href = './register.html';
                }
            }
        })
    });
    $('.login-box-ipt').on('focus', function (e) {
        if ($(this).val() !== '') {
            $(this).siblings('.clear-input').show();
        }
        console.log(e);
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