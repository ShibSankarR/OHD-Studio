// JavaScript Document
/* DETAILS
==================================================
	Theme Name: OHD	
	Author: Shib RCPL
	Author URI: 
==================================================
*/
// Header Background Change

$(document).ready(function(){
  $(window).scroll(function () {
    if($(document).scrollTop() > 50){
      $(".header").css('background','#1f1f27');
      $(".logo").css('width','10%');
    }
    else{
      $(".header").css('background','');
      $(".logo").css('width','');
    }
  });
});


// banner Slider

$(document).ready(function() {
  $('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayHoverPause:true,
    animateIn:"fadeIn",
    animateOut:"fadeOut",   
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  });


//banner text effect
var spanWidth = $('.text span').width();
$('.text').animate( { width: '100%' }, 6000 );


// Services Slider

$(document).ready(function() {
  $('.serv-slider').owlCarousel({
    loop:true,
    margin:30,
    dots: false,
    nav:true,
    //navigationText: ["<img src='images/prevv.png'>","<img src='images/nextt.png'>"],
    autoplay: true,
    autoplayHoverPause:true,
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
  })
  });




// Search box


$("#search-btn").click(function(){
  $(".search-box").fadeIn();
  $(".srch-overlay").fadeIn();
  $(".close-btn").fadeIn();
}); 

$(".srch-overlay").click(function(){
  $(".search-box").fadeOut();
  $(".close-btn").fadeOut();
  $(".srch-overlay").fadeOut();
});
$(".close-btn").click(function(){
  $(".search-box").fadeOut();
  $(".close-btn").fadeOut();
  $(".srch-overlay").fadeOut();
});


 



// Mouse Direction 

$(document).ready(function(){
  var $moveable = $('.move-rect');
  var rectPosY = parseInt($('.move-rect').css('top'), 10);
  var rectPosX = parseInt($('.move-rect').css('left'), 10);
  $(".speaker-wave").mousemove(function(e){
      $moveable.css({'top': rectPosY-e.pageY/40,'left': rectPosX-e.pageX/40});
  });
});



// artist-slider

$(document).ready(function() {
  $('.artist-slider').owlCarousel({
    loop:true,
    margin:30,
    dots: false,
    nav:true,
    autoplay: false,
    autoplayHoverPause:true,
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
  });

  // Partner Slider

$(document).ready(function() {
  $('.partner-slider').owlCarousel({
    loop:true,
    margin:30,
    dots: false,
    nav:false,
    autoplay: true,
    autoplayHoverPause:true,
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
  })
  });

  // Gallery Slider

$(document).ready(function() {
  $('.gallery-slider').owlCarousel({
    loop:true,
    dots: false,
    nav:false,
    autoplay: true,
    autoplayHoverPause:true,
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
  });




  <!--toptobottom-->

	// browser window scroll (in pixels) after which the "back to top" link is shown

	var offset = 300,

		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced

		offset_opacity = 1200,

		//duration of the top scrolling animation (in ms)

		scroll_top_duration = 700,

		//grab the "back to top" link

		$back_to_top = $('.cd-top');



	//hide or show the "back to top" link

	$(window).scroll(function(){

		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

		if( $(this).scrollTop() > offset_opacity ) { 

			$back_to_top.addClass('cd-fade-out');

		}

	});



	//smooth scroll to top

	$back_to_top.on('click', function(event){

		event.preventDefault();

		$('body,html').animate({

			scrollTop: 0 ,

		 	}, scroll_top_duration

		);

	});









	$('.blck-tape a').click(function(){

    $('html, body').animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top

    }, 500);

    return false;

});





<!--end-->