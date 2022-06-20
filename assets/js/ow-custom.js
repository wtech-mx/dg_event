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
			navText: ["<div class='nav-button owl-prev'><i class='bi bi-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='bi bi-chevron-right'></i></div>"],
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