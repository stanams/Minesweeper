var React = require('react');
var Clock = require('./clock');
var Weather = require('./weather');

var WeatherClock = React.createClass({
  render: function() {

    return(
      <div>
        <Clock/>
        <Weather/>
      </div>
    );

  }
});

module.exports = WeatherClock;
