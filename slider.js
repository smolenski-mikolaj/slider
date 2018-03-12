$(function(){
	
	var slider = $(".slider");
	slideRight();
	
	var slide = setInterval(function() { $(".carousel li").stop(true,true); slideRight(); }, 4000); 
	
	function slideRight() {
		slider.animate({'marginLeft':-400}, 4000, "linear", moveFirstSlide);
	}	
	
	function slideRightFast() {
		slider.animate({'marginLeft':-400}, 500, "linear", moveFirstSlide);
	}
	
	function slideLeft() {		
		slider.animate({'marginLeft':0}, 500, "linear", moveLastSlide);
	}
	
	function moveFirstSlide() {
		var slideFirst = slider.find("div:first");
		var slideLast = slider.find("div:last");
		slideLast.after(slideFirst);
		slider.css({marginLeft:-200});
	}	
	
	function moveLastSlide() {
		var slideFirst = slider.find("div:first");
		var slideLast = slider.find("div:last");
		slideFirst.before(slideLast);
		slider.css({marginLeft:-200});
	}
	
	$(".arrow-left").click( function() {
		slider.stop();
		slideLeft();
	});	
	
	$(".arrow-right").click( function() {
		slider.stop();
		slideRightFast();
	});
	
});