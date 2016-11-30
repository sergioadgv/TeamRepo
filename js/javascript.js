$(document).ready(function(){

	console.log("Did you get the memo");

	$("#menu-trigger").click(function(){

		$(".slide-in-menu").animate({width: 'toggle'});

		$(this).toggleClass("white");

	});

	$("#dropper").click(function(){
		$(this).toggleClass("open");
	});

	//$(".menu-hover").hover(function(){

	//})

	console.log("Js complete!");

})
