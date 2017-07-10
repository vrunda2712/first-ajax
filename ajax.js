document.addEventListener("DOMContentLoaded", function() {

  var runAjaxRequest = document.getElementById('run_ajax_request');
  var runPingPong = document.getElementById('run_ping_pong');

  runAjaxRequest.addEventListener('click',function(){
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    });
  });

  runPingPong.addEventListener('click',function(){
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function (data) {
      console.log(data);

      var element = document.createElement('div');
      element.innerHTML = data;
      document.querySelector('#step3456').append(element);
      }).fail(function( jqXHR,textStatus, errorThrown){
      console.log('INSIDE .fail()');
      console.log(textStatus, errorThrown);
      }).always(function(){
      console.log('INSIDE .always()');
    });
  });
});
