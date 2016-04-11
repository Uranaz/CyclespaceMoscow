var main = function() {
  /* Push the body and the nav over by 285px over */
  $('#aboutbtn').click(function() {
    $('#abouttext').animate({
      left: "0px"
    }, 50);
  });

  /* Then push them back*/
  $('#map').click(function() {
    $('#abouttext').animate({
      left: "-550px"
    }, 50);
    $('.aboutmenu').removeClass('current');
    $('.content').hide();
  });

  $('#closebtn').click(function() {
    $('#abouttext').animate({
      left: "-550px"
    }, 50);
    $('.aboutmenu').removeClass('current');
    $('.content').hide();
  });

  $('.aboutmenu').click(function() {
    $('.aboutmenu').removeClass('current');
    $('.content').hide();

    $(this).addClass('current');
    $(this).next().show();
  });

  $('.current').click(function(){
    $('.content').hide();
    $(this).removeClass('current');
  });

};

$(document).ready(main);
