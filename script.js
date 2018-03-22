$(document).ready(function(){

  $('#buttonGo').on('click',function(){
      var music = $('#selectMusic').val();
      var number = $('#numberSongs').val();
      $.ajax({
          url: "https://itunes.apple.com/search?term=" + music + "&limit=" + number,
          type: 'GET',
          crossDomain: true,
          dataType: 'jsonp',
          success: function(result) {
              console.log(result);
              process(result);
              $("audio").clear();
          },
          error: function() { alert('Failed!'); }
      });
  });

});

function process(result){
    $("#TABEL").empty();
    for (var i = 0; i < result.resultCount; i++) {
        $("#TABEL").append("<tr><td><div id='trackName" + i + "'></div></td><td><img id='picture" + i + "' src=''" + "'</img></td><td><audio controls='true' + id='audio"+ i + "' type='audio/m4a'"+"'</audio></td></tr>")
        $("#picture" + i).attr('src', result.results[i].artworkUrl100)
        $("#audio" + i).attr('src', result.results[i].previewUrl)
        $("#trackName" + i).text(result.results[i].trackName)
    }
}

