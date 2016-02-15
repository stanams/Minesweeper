var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');

var pageTabs = [
  {title: 'google', content: 'search resuts'},
  {title: 'email', content: 'my emails'}
];

var Widgets = React.createClass({
  render: function(){
    return(
      <div>
        <Tabs tabsArray={pageTabs}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('my-widget'));
});
