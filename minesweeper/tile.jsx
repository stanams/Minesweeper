var React = require('react');

var ReactTile = React.createClass ({
  getInitialState: function(){
    return {status: 'hidden'};
  },

  handleClick: function(e){
    e.preventDefault();
    this.props.clickHandler(this.props.tileInfo.position);

  },

  render: function(){
    var className = this.props.tileInfo.explored ? 'revealed' : 'hidden';
    var text = ' ';
    if (this.props.tileInfo.explored) {
      if (this.props.tileInfo.bomb) {
        text = "*";
      } else {
        text = this.props.tileInfo.count;
      }
    }

    return <li className={className}
               onClick={this.handleClick}>{text}</li>;
  }

});

module.exports = ReactTile;
