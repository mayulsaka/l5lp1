<<<<<<< HEAD
// ハンバーガーメニュー

=======
// ---------- ハンバーガーメニュー ---------- 
>>>>>>> 726d1e6a8d7526e9710acf34390fbace356a3d7e
const ham = $('#js-hamburger');
const nav = $('#js-nav');

ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
});
<<<<<<< HEAD
=======

>>>>>>> 726d1e6a8d7526e9710acf34390fbace356a3d7e
$(window).on('resize', function () {
        ham.removeClass('active');
        nav.removeClass('active');
});