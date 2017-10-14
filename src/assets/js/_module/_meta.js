import $ from 'jquery';

export function date() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();

  if ( minute < 10 ) {
    minute = '0' + minute;
  }

  if ( hour < 10 ) {
    hour = '0' + hour;
  }

  $('.meta__item .minute').html(hour);
  $('.meta__item .second').html(minute);

  // setInterval(function() {
  //   date();
  // }, 60000)
}

export function weather() {
  $.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?id=1853909&units=metric&appid=2f890cb41f31cbbba489407e0936a6d5',
    dataType: 'json',
    success: function(response) {
      let weather = response.weather[0].main;
      $('.meta__cat--weather .meta__item').text(weather);
    },
    error: function() {
      aleer('Error requesting data')
    }
  });
}
