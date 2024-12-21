// ---------- ハンバーガーメニュー ---------- 
const ham = $('#js-hamburger');
const nav = $('#js-nav');

ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
});

$(window).on('resize', function () {
        ham.removeClass('active');
        nav.removeClass('active');
});