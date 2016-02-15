var React = require('react');

var Weather = React.createClass({
  getInitialState: function(){
    return {weather: undefined, location: undefined};
  },

  render: function(){
    var location = navigator.geolocation;
    if (this.state.weather) {
      // var info = this.state.weather;
      var weatherInfoArray = [];

      var info = Object.keys(this.state.weather).map(function(key){
        if (this.state.weather[key] === undefined) {
          this.state.weather[key] = 'no rain';
        }
        return(
          // we use the 'key' JSX attribute so that each <li> is identified
          <li key={key}>{key} = {this.state.weather[key]}</li>
        );
      }.bind(this));
    } else {
      var info = <p>Patient,weather is still loading</p>;
    }
    return(
      <ul>
        {info}
      </ul>
    );
  },

  requestWeather: function(location){

    var lat = location.latitude;
    var lon = location.longitude;

    var request = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +
      lat + "&lon=" + lon + '&appid=645c5d39c7603f17e23fcaffcea1a3c1&units=metric';

    request.open("GET", url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        weatherSuccess(request.responseText);
      } else {
        weatherFailure(request.responseText);
      }
    };

    var weatherSuccess = function(response){
      var obj = JSON.parse(response);

      var weather = {
        temp: obj.main.temp,
        clouds: obj.weather[0].description,
        city: obj.name,
        rain: obj.rain
      };
      // saving the weather state
      this.setState({weather: weather});
    }.bind(this)

    function weatherFailure(response){
    }

    request.send();

  },


  componentDidMount: function(){
      var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    var success = function(pos) {
      var crd = pos.coords;
      this.setState({location: crd});
      this.requestWeather(crd);
    }.bind(this);

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

  }
});

module.exports = Weather;
