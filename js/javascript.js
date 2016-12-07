$(document).ready(function() {
	
	$("#trigger_1").click(function(){

		$(this).toggleClass('hidden');

		$("#view_2").toggleClass('hidden');
	});

	$("#trigger_2").click(function(){

		$(this).toggleClass('hidden');

		$("#view_3").toggleClass('hidden');
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
<<<<<<< HEAD
							// var url = item.poster_path;
							// var image = $(document.createElement('img'));
							// image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
	    		// 			// image.attr('class', thumbnail);
	    		// 			image.addClass('.view');
	    		// 			image.appendTo('#scifiphoto-container'); 
=======
							var url = item.poster_path;
							var image = $(document.createElement('img'));
							image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
	    					// image.attr('class', thumbnail);
	    					image.addClass('view');
	    					image.appendTo('#scifiphoto-container'); 
>>>>>>> c7ad15c5721699446e8b8c9437489f1ebc35c8d6

		    					var overview = item.overview;
		    					var popDiv = $(document.createElement('div'));
		    					popDiv.addClass('view');
		    					popDiv.appendTo('#scifiphoto-container');
	    					   	var para = $(document.createElement('p'));
	    					   	para.appendTo('.view');
	    			


<<<<<<< HEAD
	    					// $(image).mouseover(function(){
	    					// 	$(image).click(function(){
	    					// 		$('view').fadeIn('slow');
	    					// 	});
=======
	    					// $(image).hover(function(){
	    					// 	// $(this).popover('view');
>>>>>>> c7ad15c5721699446e8b8c9437489f1ebc35c8d6

	    					// });
	    					// console.log(overview);
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
							var image = $(document.createElement('img'));
							image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
							image.addClass('view');
	    					image.appendTo('#warphoto-container'); 
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
							var image = $(document.createElement('img'));
							image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
							image.addClass('view');
	    					image.appendTo('#romancephoto-container'); 
						});
				
            	
});
					});


$( document ).ready(function() {
	$('.carousel').carousel({
		interval: 3000
});
});