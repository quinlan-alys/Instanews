
$(function () {


  $('#mySelect').heapbox({'onChange': function () {
  //event.preventDefault();

  //$("#mySelect").heapbox();
 //$('#mySelect').heapbox({'onChange':function(){
    

      $('.loader').show();
      $('img').removeClass('logo').addClass('newLogo');

      let topic = $('#mySelect').val()
      console.log(topic);
      $.ajax({
        method: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=98e823a3d9954d40bd51888d331553cf`,
      }).done(function (data) {
        $('.content').empty();

        let content = '';
        let info = data.results

          .filter(function (e) {
            return e.multimedia.length
          })

          .splice(0, 12);

        $.each(info, function (key, value) {
          if (value.multimedia.length >= 5) {
            content += '<li>';
            content += '<a href=' + value.url + '>';
            content += '<p class="abstract">' + value.abstract + '</p>';
            content += '<div class="images" style ="background-image: url(' + value.multimedia[4].url + ')" ></div>';
            content += '</a></li>';
          }
        })

        $('.content').append(content);
      }).always(function () {
        $('.loader').hide()
      }).fail(function () {
        $('.error').show();
      });
    }
  });
});

