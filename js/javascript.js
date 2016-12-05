$(document).ready(function() {
// // Tooltip only Text
// $('.masterTooltip').hover(function(){
//         // Hover over code
//         var title = $(this).attr('title');
//         $(this).data('tipText', title).removeAttr('title');
//         $('<p class="tooltip"></p>')
//         .text(title)
//         .appendTo('body')
//         .fadeIn('slow');
// }, function() {
//         // Hover out code
//         $(this).attr('title', $(this).data('tipText'));
//         $('.tooltip').remove();
// }).mousemove(function(e) {
//         var mousex = e.pageX + 20; //Get X coordinates
//         var mousey = e.pageY + 10; //Get Y coordinates
//         $('.tooltip')
//         .css({ top: mousey, left: mousex })
// });
	
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
					url: 'http://api.themoviedb.org/3/search/movie?api_key=76289adfaff9f754d64a41b22a008043&query=scifi&&movie',
					method: 'GET',
					// contentType: 'application/json',
					data: {
						type:'movie',
			            r: 'json',
			            api_key: '76289adfaff9f754d64a41b22a008043'
					}}).done(function (response_body) {
						response_body.results.forEach(function(item){
							// console.log(item )
							var url = item.poster_path;
							var image = $(document.createElement('img'));
							image.attr('src', 'https://image.tmdb.org/t/p/w154'+url);
	    					// image.attr('class', thumbnail);
	    					image.appendTo('#photo-container'); 
						});
				
            	
});
					});

