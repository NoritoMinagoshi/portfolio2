window.onload = function(){
  // ナビから各種項目へスクロール
  if (window.matchMedia( '(min-width: 767px)' ).matches) {
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var adjust = -55 ;
      var position = target.offset().top + adjust;
      $("html,body").animate({
        scrollTop:position
      }, speed, "swing");
      return false;
    });
  };
  if (window.matchMedia( '(max-width: 766px)' ).matches) {
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var adjust = -60 ;
      var position = target.offset().top + adjust;
      $("html,body").animate({
        scrollTop:position
      }, speed, "swing");
      return false;
    });
  };

  // トップへ戻るボタン
  $(function() {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function() {
      if (window.matchMedia( '(min-width: 767px)' ).matches) {
        if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      };
    });
    pagetop.click(function() {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  // ドロップダウンメニュー
  $(function() {
    $('.nav-bar').click(function() {
      $('.nav-bar').next().slideToggle();
    });
  });
};
