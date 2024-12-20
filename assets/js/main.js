// ---------- ハンバーガーメニュー ---------- 
// const ham = $('#js-hamburger');
// const nav = $('#js-nav');
// ham.on('click', function () {
//   ham.toggleClass('active');
//   nav.toggleClass('active');
// });

// ---------- ハンバーガーメニュー ---------- 
const ham = $('#js-hamburger');
const nav = $('#js-nav');

// ハンバーガーメニューのクリックイベント
ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
});

// ウィンドウサイズ変更時に実行
$(window).on('resize', function () {
    if ($(window).width() >= 760) {
        // ハンバーガーメニューを閉じる
        ham.removeClass('active');
        nav.removeClass('active');
    }
});