$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$('#clients-logo').owlCarousel({
		autoPlay: 3000,
	    loop:true,
	    margin:10,
	    center:true,
	    items: 3,
	    responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        },
	        600:{
	            items:3
	        }
	    }
	})


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




