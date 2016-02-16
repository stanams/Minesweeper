var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return {search: ''};
  },

  handleInput: function(e){
    this.setState({search: e.target.value});
  },

  handleClick: function(name, e){
    e.preventDefault();

    this.setState({search: name });
  },

  render: function() {

    var matchingNames = [];
    var matchingNames = this.props.namesList.filter(function(name){
      return name.toLowerCase().startsWith(this.state.search.toLowerCase());
    }.bind(this))

    var listItems = matchingNames.map(function(name){
      return <li key={name} onClick={this.handleClick.bind(this, name)}>{name}</li>
    }.bind(this));

    return(
      <section>
        search:
        <input type="text" onInput={this.handleInput} value={this.state.search} />

        <ul>
          <ReactCSSTransitionGroup
            transitionName="auto"
            transitionEnterTimeout={1}
            transitionLeaveTimeout={1}
          >
            {listItems}</ReactCSSTransitionGroup>
        </ul>
      </section>
    );
  }

});

module.exports = Autocomplete;
