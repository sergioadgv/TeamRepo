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
							// var url = item.poster_path;
							// var image = $(document.createElement('img'));
							// image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
	    		// 			// image.attr('class', thumbnail);
	    		// 			image.addClass('.view');
	    		// 			image.appendTo('#scifiphoto-container'); 

		    					var overview = item.overview;
		    					var popDiv = $(document.createElement('div'));
		    					popDiv.addClass('view');
		    					popDiv.appendTo('#scifiphoto-container');
	    					   	var para = $(document.createElement('p'));
	    					   	para.appendTo('.view');
	    			


	    					// $(image).mouseover(function(){
	    					// 	$(image).click(function(){
	    					// 		$('view').fadeIn('slow');
	    					// 	});

	    					// });
	    					// console.log(overview);
						});
				
            	
});
					});


$( document ).ready(function() {
			$.ajax({
					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&query=war',
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
	    					// image.attr('class', thumbnail);
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
	    					// image.attr('class', thumbnail);
	    					image.appendTo('#romancephoto-container'); 
						});
				
            	
});
					});

// var url = item.title;
							// var title = $(document.createElement('h3'));
							// title(title);
	    		// 			// image.attr('class', thumbnail);
	    		// 			title.appendTo('#photo-container');
$( document ).ready(function() {
	$('.carousel').carousel({
		interval: 3000
});
});