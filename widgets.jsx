var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weather-clock/weather_clock');
var Autocomplete = require('./autocomplete/autocomplete');
var Chance = require('chance');

var pageTabs = [
  {title: 'google', content: 'search resuts'},
  {title: 'email', content: 'my emails'}
];

// debugger;

var names = [];
for (var i = 0; i < 500; i++) {
  // debugger;
  names.push(chance.name());
}

var Widgets = React.createClass({
  render: function(){
    // so now this.props.namesList is available in Autocomplete
    return(
      <div>
        <Tabs tabsArray={pageTabs}/>
        <WeatherClock />
        <Autocomplete namesList={names}/>

      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('my-widget'));
});
