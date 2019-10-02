// custom js start//
$(document).ready(function(){
    // curve text start//
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });
    // curve text end//
    // owl carousel start//
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items:5,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
    });
    $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
    })
            // owl carousel end// 
});
// custom js end//