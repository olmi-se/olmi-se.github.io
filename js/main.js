$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();

	$('#clients-logo').owlCarousel({
		autoPlay: 3000,
	    loop:true,
	    margin:10,
	    center:true,
	    items:3
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




