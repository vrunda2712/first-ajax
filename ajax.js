document.addEventListener("DOMContentLoaded", function() {

  var runAjaxRequest = document.getElementById('run_ajax_request');
  var runPingPong = document.getElementById('run_ping_pong');
  var runRequestCount = document.getElementById('run_request_count');
  var runRequestTime = document.getElementById('run_request_time');
  var runRequestCar = document.getElementById('run_request_car');

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
      // url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
    }).done(function (data) {
      console.log(data);

      var element = document.createElement('div');
      element.innerHTML = data;
      document.querySelector('#step3456').append(element);
      }).fail(function( jqXHR,textStatus, errorThrown){

        var fail = document.createElement('div');
        fail.innerHTML = 'Your request has failed, Try harder next time!';
        document.querySelector('#step3456').append(fail);
        console.log(textStatus, errorThrown);
      }).always(function(){
      console.log('Hey.. The request finished!');
    });
  });

  runRequestCount.addEventListener('click',function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    }).done(function(data) {
      console.log('Hurreey... We did it!');
      console.log(data);

      var element = document.createElement('div');
      element.innerHTML = data;
      document.querySelector('#step7').append(element);
    });
  });

  runRequestTime.addEventListener('click',function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'text',
      data: {
        timezone: 'Europe/Sofia',
      }
    }).done(function(data) {
      console.log('Hurreey... We did it!');
      console.log(data);

      var element = document.createElement('div');
      element.innerHTML = data;
      document.querySelector('#step8').append(element);
    });
  });

  runRequestCar.addEventListener('click',function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    }).done(function(data) {
      console.log(data);

      var element = document.createElement('div');
      element.innerHTML = data;
      document.querySelector('#step9').append(element);
      document.querySelector('#car').append(element);
    });
  });
});
