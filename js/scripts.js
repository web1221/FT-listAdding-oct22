$(function() {
  $('button#hello').click(function() {
    $('ul#user').after('<li>hello</li>');
    $('ul#webpage').before('<li>hello, how are you?</li>');
    $('ul#user').children('li').click(function() {
      $(this).remove();
    });
    $('ul#webpage').children('li').click(function() {
      $(this).remove();
    });


  });
  $('button#goodbye').click(function() {
    $('ul#user').append('<li>bye</li>');
      $('ul#webpage').append('<li>Dont Gooooo!</li>');
  });
  $('button#stop').click(function() {
    $('ul#user').append('<li>no</li>');
      $('ul#webpage').append('<li>Stop copying me!</li>');
  });



});
