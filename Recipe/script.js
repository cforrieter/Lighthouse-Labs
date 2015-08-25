$(document).ready(function() {
  var showPics = true;
  $('.ingredients li').click(function(){
    if ($(this).children('i').hasClass('fa-square-o'))
    {
      $(this).children('i').removeClass('fa-square-o');
      $(this).children('i').addClass('fa-check-square-o');
      $(this).css('text-decoration', 'line-through');
    }else{
      $(this).children('i').removeClass('fa-check-square-o');
      $(this).children('i').addClass('fa-square-o');
      $(this).css('text-decoration', '');
    }
  });
  $('.step').click(function(){
    $('.step').css('text-shadow', '');
    $('.directions i').css('visibility', 'hidden');
    $(this).css('text-shadow', '2px 1px 1px rgba(0, 176, 183, 1)');
    $(this).children('i').css('visibility', 'visible');
  })

  $('.toggle').click(function() {
    if(showPics){
      $('img').fadeTo('slow', 0);
      showPics = false;
    }else{
      $('img').fadeTo('slow', 1);
      showPics = true;
    }
  });
});
