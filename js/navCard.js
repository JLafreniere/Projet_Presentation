
$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#navCard');
    var navHomeY = 70;
    var isFixed = false;
    var $w = $(window);

    console.log($(document).scrollTop());
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                
                top: 0
          
                
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            
            nav.css({
                position: 'fixed',
                top: 60
            });
            isFixed = false;
            

        }
    });
});




$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#navCard2');
    var navHomeY = 0;
    var isFixed = false;
    var $w = $(window);

    console.log($(document).scrollTop());
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                
                top: 340
          
                
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            
            nav.css({
                position: 'fixed',
                top: 400
            });
            isFixed = false;
            

        }
    });
});

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });






