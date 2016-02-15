var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return {search: ''};
  },

  handleInput: function(e){
    this.setState({search: e.target.value});
  },

  render: function() {

    var matchingNames = [];
    var matchingNames = this.props.namesList.filter(function(name){
      return name.toLowerCase().startsWith(this.state.search.toLowerCase());
    }.bind(this))

    var listItems = matchingNames.map(function(name){
      return <li>{name}</li>
    })

    return(
      <section>
        search:
        <input type="text" onInput={this.handleInput} />

        <ul>
          {listItems}
        </ul>
      </section>
    );
  }

});

module.exports = Autocomplete;
