// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Great Guana Cay, The Bahamas',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<span style="color:#42403c; font-size:11pt; font-weight:600;">'+weather.temp+'&deg;'+weather.units.temp+'</span>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
