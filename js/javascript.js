
$( document ).ready(function () {
  $('[data-toggle="popover"]').popover()
})




$( document ).ready(function() {
			$.ajax({
					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&query=2016',
					method: 'GET',
					data: {
						type:'movie',
			            r: 'json',
			            api_key: '76289adfaff9f754d64a41b22a008043',
					}}).done(function (response_body) {
						response_body.results.forEach(function(item){
							console.log(item )
							var url = item.poster_path;
							var title = item.original_title;
							
							if(url!=null)
							{
								console.log (url);
								var popover = $(document.createElement('div'));
								var image = $(document.createElement('img'));
								image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
								$(image).addClass('thumbnail');
	    						image.appendTo('#latestphoto-container');
								// popover.onClick(addClass('class', 'popclass');
								// popover.attr('data-toggle', 'popover');
								// popover.append(title);
								// popover.appendTo('#latestphoto-container');
								// console.log(popover.class)

									
	    				// 		image.click((function() {
									// var popover = $(document.createElement('button'));
									// popover.appendTo('#latestphoto-container')
	    					}		
	    					else
	    					{
	    						console.log (url);
	    						}
						});
				
            	
});
					});
$( document ).ready(function() {
			$.ajax({
					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&query=scifi',
					method: 'GET',
					// contentType: 'application/json',
					data: {
						type:'movie',
			            r: 'json',
			            api_key: '76289adfaff9f754d64a41b22a008043',
					}}).done(function (response_body) {
						response_body.results.forEach(function(item){
							console.log(item )
							var url = item.poster_path;
							if(url!=null){
								console.log (url);
								var image = $(document.createElement('img'));
								image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
								$(image).addClass('thumbnail');
	    						image.appendTo('#scifiphoto-container'); 
	    					}
	    					else{
	    						console.log (url);
	    						}

							// image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
	    		// 			//image.attr('class', thumbnail);
	    		//  			// image.addClass('view');
	    		//  			image.appendTo('#scifiphoto-container'); 

		    	// 			// var overview = item.overview;
		    	// 			var popDiv = $(document.createElement('div'));
		    	// 			popDiv.addClass('view');
		    	// 			popDiv.appendTo('#scifiphoto-container');
	    		// 			 var para = $(document.createElement('p'));
	    		// 			 para.appendTo('#scifiphoto-container');
	    		// 			 para.text("hello");

	    				
						});
				
            	
});
					});


$( document ).ready(function() {
			$.ajax({
					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&query=war',
					method: 'GET',
					data: {
						type:'movie',
			            r: 'json',
			            api_key: '76289adfaff9f754d64a41b22a008043',
					}}).done(function (response_body) {
						response_body.results.forEach(function(item){
								console.log(item )
								var url = item.poster_path;
								if(url!=null){
									console.log (url);
									var image = $(document.createElement('img'));
									image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
									$(image).addClass('thumbnail');
		    						image.appendTo('#warphoto-container'); 
		    					}
		    					else{
		    						console.log (url);
		    						}
						});
				
            	
});
					});

$( document ).ready(function() {
			$.ajax({
					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&query=love',
					method: 'GET',
					// contentType: 'application/json',
					data: {
						type:'movie',
			            r: 'json',
			            api_key: '76289adfaff9f754d64a41b22a008043',
					}}).done(function (response_body) {
						response_body.results.forEach(function(item){
							console.log(item )
							var url = item.poster_path;
							if(url!=null){
								console.log (url);
								var image = $(document.createElement('img'));
								image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
								$(image).addClass('thumbnail');
	    						image.appendTo('#romancephoto-container'); 
	    					}
	    					else{
	    						console.log (url);
	    						}
						});
				
            	
});
					});

$( document ).ready(function(){
	$('.carousel').carousel({
		interval: 3000
});
});


// $(document).ready(function(){

// 	console.log("Works");
            

//     $( "#search" ).click(function() {
                
//          var inputtext = $("#search-input").val();

//         console.log(inputtext);

//         $.ajax({
// 					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&',
// 					method: 'GET',
// 					contentType: 'application/json',
// 					s: inputtext,
// 					data: {
// 						type:'movie',
// 			            r: 'json',
// 			            api_key: '76289adfaff9f754d64a41b22a008043',
// 					}}).done(function (response_body) {
// 						response_body.results.forEach(function(item){
// 							console.log(item )
// 							var url = item.poster_path;
// 							var image = $(document.createElement('img'));
// 							image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
// 	    					// image.attr('class', thumbnail);
// 	    					image.appendTo('#warphoto-container'); 
// 						});
// 					});
// 	});
// })

//begin slider

 $(document).ready(function(){

 	console.log("Did you get the memo");

 	$("#menu-trigger").click(function(){

 		$(".slide-in-menu").animate({width: 'toggle'});

 		//$("#navbar").toggleClass("hidden");

 	});

 	$("#dropper").click(function(){
 		$(this).toggleClass("open");
 	});

 	$("#close").click(function(){

 		$(".slide-in-menu").animate({width: 'toggle'});

 		//$("#navbar").toggleClass("hidden");
 	})

 	console.log("Js complete!");

 })

//end slider

