var React = require('react');

var Tabs = React.createClass({

  getInitialState: function(){
    return { selected: 0 };
  },

  render: function(){

    var listItems = this.props.tabsArray.map(function(tab, index) {
      // debugger
      var currentTab = this.state.selected === index ? "selected" : "disabled";
      return(
        <li className={currentTab} onClick={this.handleClick.bind(this, index)} key={index}> {tab.title}</li>
      );
      // here we bind the index to be able to use it in the handleClick function
      // otherwise that will throw an error
    }.bind(this));

    // debugger;

    return(
      <div className='page'>
        <ul>
          {listItems}
        </ul>

        <p>
          {this.props.tabsArray[this.state.selected].content}
        </p>
      </div>

    );

  },
  handleClick: function(i, event){
    event.preventDefault();
    var index = i;
    this.setState({selected: index});

  }

});

module.exports = Tabs;
