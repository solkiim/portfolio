$(document).ready(function() {
	// -------------------------- MODALS --------------------------
	$("#aboutmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'aboutmodal',
	});
	
	$("#experiencemodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'experiencemodal',
	});
	
	$("#projectsmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'projectsmodal',
	});
	
	$("#contactmodal-link").animatedModal({
		color: '#ffffff',
		animatedIn: 'bounceInUp',
		animatedOut: 'bounceOutDown',
		modalTarget: 'contactmodal',
	});
	
	
	// -------------------------- ABOUT --------------------------
	// typed
	var aboutTyped = new Typed('#identity-carousel', {
		strings: ['an entp', 'an avid bananagrams player', 'a satirical writer', 'an enneagram type 8', 'a mostly contained mess', 'an optimist', 'a mediocre driver'],
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
		adaptiveHeight: false,
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

