var React = require('react');
var Core = require('./minesweeper.js');
var Tile = Core.Tile;
var Board = Core.Board;
var ReactBoard = require('./react_board');

var Minesweeper = React.createClass({

  getInitialState: function(){
    return {board: new Board(10,10)};
  },

  updateGame: function(p){
    this.state.board.grid[p[0]][p[1]].explore();
    this.setState({ board: this.state.board });
  },

  componentDidMount: function(){

  },

  render: function(){
    var board =
      <ReactBoard board={this.state.board} update={this.updateGame} />;

      return (<div>{board}</div>);

  }

});

module.exports = Minesweeper;
