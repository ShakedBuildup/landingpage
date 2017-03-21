
function main() {
$("#testimonials-section").backstretch("../img/testimation.jpg");

    (function () {
   'use strict';



    /*====================================
    Preloader
    ======================================*/

  	$(window).load(function() {
        $("#firstHeader1").addClass('show');
        $("#firstHeader2").addClass('show');
        $("#secondHeader").addClass('show');
  	})
    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {

  	  $("#clients").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});


  	/*====================================
    WOW JS
    ======================================*/	

	new WOW().init();
	//smoothScroll
	//smoothScroll.init();
}());


}
main();