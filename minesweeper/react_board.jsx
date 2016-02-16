var React = require('react');
var ReactTile = require('./tile');
var ReactBoard = React.createClass({

  render: function(){
    var boardList = [];

    for (var i = 0; i < this.props.board.gridSize; i++) {
      var row = [];
      for (var j = 0; j < this.props.board.gridSize; j++) {
        var t = this.props.board.grid[i][j];
        row.push(
          <ReactTile
            className={'tile'}
            clickHandler={this.props.update}
            key={[i, j]}
            tileInfo={{
              position: t.pos,
              bomb: t.bombed,
              explored: t.explored,
              count: t.adjacentBombCount()
            }} />
        );
      }
      boardList.push(<ul className={'row'} key={i}>{row}</ul>);
    }

    return(
    <div>
      {boardList}
    </div>
  );
  }


});

module.exports = ReactBoard;
