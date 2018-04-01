$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
           $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
	
      $(".homepage-slides").on("translate.owl.carousel",function(){
            	$(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInUp").css("opacity","0");
            	$(".single-slide-item h2, .slide-btn").removeClass("animated fadeInDown").css("opacity","0");
            });
             $(".homepage-slides").on("translated.owl.carousel",function(){
            	$(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInUp").css("opacity","1");
            	$(".single-slide-item h2, .slide-btn").addClass("animated fadeInDown").css("opacity","1");
            });
	
	
	 jQuery(window).load(function(){
       jQuery(".slide-preloader-wrap").fadeOut(500);
    });

}(jQuery));