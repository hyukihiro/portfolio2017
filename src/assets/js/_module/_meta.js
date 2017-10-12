import $ from 'jquery';

export function date() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();

  $('.meta__item .minute').html(hour);
  $('.meta__item .second').html(minute);

  // setInterval(function() {
  //   date();
  // }, 1000)
}

export function weather() {
  $.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?id=1853909&units=metric&appid=2f890cb41f31cbbba489407e0936a6d5',
    dataType: 'json',
    success: function(response) {
      console.dir(response.weather);
        $('.sns').text(response);
    },
    error: function() {
        alert('えらぁ');
    },
    complete: function() {
        alert('こんぷりーと');
    }
  });
}
