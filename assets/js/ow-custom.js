jQuery(document).ready(function ($){
	"use strict";

        $('#customers-testimonials').owlCarousel({
            loop: true,
			center: true,
			items:3,
			margin: 0,
			nav: true,
			autoplay:true,
			dots:true,
			autoplayTimeout:8500,
			navText: ["<div class='nav-button owl-prev'><img class='img_after' src='./assets/img/arrow_left_ligth.webp' style='width:25px'></div>", "<div class='nav-button owl-next'><img class='img_after' src='./assets/img/arrow_rigth_ligth.webp' style='width:25px'></div>"],
			smartSpeed: 450,
			responsive: {
			       0 : {
						items:1
					},
					768 : {
						items:2
					},
					980 : {
						items:3
					}
			}
		  });
});