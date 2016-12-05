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
				  url: 'href="http://api.themoviedb.org/3/discover/movie?',
				  method: 'GET',
				  contentType: 'application/json; charset=UTF-8',
				  data: {
				    type:'movie',
				    r: 'json',
				    api_key: '76289adfaff9f754d64a41b22a008043'  
				  },
				  function (response_body) {
 						 console.log(response_body)
						}
				  //Below is the function to append to images: 
				  	// function handleResults(response_body) {
  					// 	response_body.data.forEach(function(item) {
    			// 		var url = item.images.fixed_height_downsampled.url;
    			// 		var image = $(document.createElement('img'));
    			// 		image.attr('src', url)
    			// 		image.appendTo('#photo-container')
  })
});


