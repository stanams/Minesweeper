var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weather-clock/weather_clock');
var Autocomplete = require('./autocomplete/autocomplete');

var pageTabs = [
  {title: 'google', content: 'search resuts'},
  {title: 'email', content: 'my emails'}
];

var names = [



]

var Widgets = React.createClass({
  render: function(){
    return(
      <div>
        <Tabs tabsArray={pageTabs}/>
        <WeatherClock />
        <Autocomplete />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('my-widget'));
});
