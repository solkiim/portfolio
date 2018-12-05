$(document).ready(function() {
	// -------------------------- MODALS --------------------------
	$("#aboutmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'zoomInUp',
		animatedOut: 'zoomOutDown',
		modalTarget: 'aboutmodal',
	});
	
	$("#experiencemodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'zoomInUp',
		animatedOut: 'zoomOutDown',
		modalTarget: 'experiencemodal',
	});
	
	$("#projectsmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'zoomInUp',
		animatedOut: 'zoomOutDown',
		modalTarget: 'projectsmodal',
	});
	
	$("#contactmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'zoomInUp',
		animatedOut: 'zoomOutDown',
		modalTarget: 'contactmodal',
	});
	
	
	// -------------------------- ABOUT --------------------------
	// typed
	var aboutTyped = new Typed('#identity-carousel', {
		strings: ['a #girlwhocodes', 'a Warriors fan', 'a satirical writer'],
		typeSpeed: 18,
		startDelay: 1200,
		fadeOut: true,
		backDelay: 1500,
		loop: true,
		showCursor: false,
	});

	// slick carousel
	$('#about-images').slick({
		accessibility: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1700,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: false,
		draggable: false,
		swipe: false,
		touchMove: false,
		fade: true,
		infinite: true,
		pauseOnFocus: false,
		pauseOnHover: false,
	});
	
	
	// -------------------------- PROJECTS --------------------------
	// carousel
	$('#project-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		asNavFor: '#project-descriptions',
		prevArrow: '<button class="slick-prev"><img src="img/projects/left-arrow.svg"></button>',
		nextArrow: '<button class="slick-next"><img src="img/projects/right-arrow.svg"></button>',
		adaptiveHeight: true,
	});
	$('#project-descriptions').slick({
		slidesToScroll: 1,
		asNavFor: '#project-images',
		fade: true,
		arrows: false,
		adaptiveHeight: true,
	});

	// tooltip
	$('[data-toggle="tooltip"]').tooltip();
});

