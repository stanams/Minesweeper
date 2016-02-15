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
        <li className={currentTab} onClick={this.handleClick} data-tabid={index}> {tab.title}</li>
      );
    }.bind(this));

    debugger;

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
  handleClick: function(e){
    e.preventDefault();
    // debugger;
    var newSelected = e.currentTarget.getAttribute('data-tabid');
    this.setState({selected: parseInt(newSelected)});

  }

});

module.exports = Tabs;
