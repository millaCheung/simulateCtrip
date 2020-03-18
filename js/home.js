$(function () {
    $('.home-i-back').on('click', function () {
        $.ajax({
            url: './index.html',
            success(data) {
                if (data) {
                    window.location.href = './index.html';
                }
            }
        })
    });
    $('.home-btn').on('click', function () {
        $.ajax({
            url: './login.html',
            success(data) {
                if (data) {
                    window.location.href = './login.html';
                }
            }
        })
    })
});