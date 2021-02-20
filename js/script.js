menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");

	if(x.className === "topnav") {
		x.className += " responsive"; 
	} else{
		x.className = "topnav";
	}
}
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3, 
		slidesToScroll:1,
		speed:1000,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:true,
		autoplaySpeed:1500,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swap:true,
		touchThreshold:10,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:false,
		rows:1,
		slidesPerRow:1,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					slidesToScroll:1,
					arrows:true
				}
			},{
				breakpoint: 420,
				settings: {
					slidesToShow:1,
					slidesToScroll:1,
					arrows:true,
				}
			},
		],
		mobileFirst:false,
	});
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(currentSlide);
	});
	$('.slider').on('afterChange', function(event, slick, currentSlide){
		console.log(currentSlide);
	});

	$('.slider').slick('goTo',0);
});