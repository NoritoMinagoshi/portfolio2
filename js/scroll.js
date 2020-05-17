window.onload = function(){
  // ナビから各種項目へスクロール
  if (window.matchMedia( '(min-width: 768px)' ).matches) {
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
  if (window.matchMedia( '(max-width: 767px)' ).matches) {
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var adjust = -59 ;
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
      if (window.matchMedia( '(min-width: 768px)' ).matches) {
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

// headerの色切り替え
if (window.matchMedia( '(max-width: 767px)' ).matches) {
  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top > 80) {
      $('header').css('background-color', 'rgba(0, 0, 0, .7)');
      $('header .header-nav .nav-bar .nav-bar-line').css('background-color', '#fff');
      $('header > a h1').css('color', '#fff');
      $('header .header-nav .header-ul').css('background-color', 'transparent');
      $('header .header-nav .header-ul li a').css('color', '#000');
      $('header .header-nav .header-ul').css('background-color', 'rgba(0, 0, 0, .7)');
      $('header .header-nav .header-ul li a').css('color', '#fff');
    } else {
      $('header').css('background-color', 'transparent');
      $('header .header-nav .nav-bar .nav-bar-line').css('background-color', '#000');
      $('header > a h1').css('color', '#000');
      $('header .header-nav .header-ul').css('background-color', 'transparent');
      $('header .header-nav .header-ul li a').css('color', '#000');
    }
  });
}
