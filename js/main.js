$(document).ready(function() {
  //fundo movendo
  $('#home').mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 10;
    var y = -(e.pageY + this.offsetTop) / 10;
    $(this).css('background-position', x + 'px ' + y + 'px');
  });


  //botao mobile
  $('.mobile-btn').click(function() {
    $(this).toggleClass('ativo');
  });

  //clicou começar(){
  $('.show').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      menuHeight = $('.fixed-top').innerHeight(),
      targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 500);
  });


  //Animacao para opacidade na navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.opaque-navbar').addClass('opaque');
      $('.nav-link').addClass('branco');
      $(".logo").attr('src', 'assets/img/logo-cbx-inverso.png');
    } else {
      $('.opaque-navbar ').removeClass('opaque');
      $('.nav-link ').removeClass('branco');
      $(".logo").attr('src', 'assets/img/logo-cbx.png');
    }
  });

  //scroll suave

  $('.fixed-top a[href^="#"]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      menuHeight = $('.fixed-top').innerHeight(),
      targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 500);
  });

  //logo scrollup
  $('.img-fluid').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  //arrumar bug do jquery
  console.log($("#" + this.d));

  // scroll link ativo

  $('section').each(function() {
    var height = $(this).height(),
      offsetTop = $(this).offset().top,
      menuHeight = $('.fixed-top').innerHeight(),

      id = $(this).attr('id'),
      $itemMenu = $('a[href="#' + id + '"]');
    // console.log(height);
    // console.log(offsetTop);
    // console.log(id);
    // console.log($itemMenu);
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      if (offsetTop - menuHeight - 150 < scrollTop && offsetTop + height - menuHeight - 150 > scrollTop) {
        $itemMenu.removeClass('active')
        $itemMenu.addClass('active');
      } else {
        $itemMenu.removeClass('active')
      }
      // console.log(scrollTop);
    });
  });


});
