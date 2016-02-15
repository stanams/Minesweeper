var React = require('react');

var Clock = React.createClass({
  getInitialState: function(){
    return {time: new Date()};
  },
  componentDidMount: function(){
    setInterval(this.tick, 1000);
  },
  tick: function(){
    var oldDate = this.state.time;
    var newDate = new Date(oldDate.setSeconds(oldDate.getSeconds() + 1));
    this.setState({time: newDate});
  },
  render: function(){

    return(
      <div>
        {this.state.time.toString()}
      </div>
    );

  }

});


module.exports = Clock;
