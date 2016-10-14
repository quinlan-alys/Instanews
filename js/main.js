
$("#dropdown option:selected").val();

$('#dropdown').on('change', function(event) {
  event.preventDefault();

  var searched = $("#dropdown option:selected").val();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?faf182c430e74acea801d91d37d25420 + searched";

  $.ajax({
    url: url,
    method: 'GET',
    
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    $('.choose').append('Error');
  }).always(function(){
    tomatoe();
  })

});

function tomatoe (){
  console.log("donkey's are cool");
}
//.done(function(data) { 
//$('ul').empty();
 //for (var i = 0; i < data.results.length; i++) {
   // var album = [data.results[i].artworkUrl100, data.results[i].collectionName];

 //var albumMarkup = '';

//albumMarkup += '<img src="' + album[0] + '">';
//albumMarkup += '<p>' + album[1] +'</p>';

//$('.album-list').append('<li>' + albumMarkup + '</li>');

   // }

//.fail(function() {
//$('.album-list').append('Sorry, artist not found');
  // })

//  console.log(data)
//.fail(function() {
  //   $('.album-list').append('Artist not found');
 //  });
//});
