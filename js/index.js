$(function () {
    $('.search-index-box').on('click', function () {
        $('.js-search-page').show().siblings('.js-index-page').hide();
    });
    $('.s-back').on('click', function () {
        $('.js-search-page').hide().siblings('.js-index-page').show();
    });
    $('.notice-myctrip').on('click', function () {
        $.ajax({
            url:'./home.html',
            success(data) {
                if (data) {
                    window.location.href = './home.html';
                }
            }
        })
    });

});
