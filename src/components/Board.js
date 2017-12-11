import React from 'react';
import Square from './Square';

class Board extends React.Component{
    renderSquare(i){
        const isNewMove = (this.props.curPos === i) ? true : false;
        return <Square  isNewMove={isNewMove}
                        index={i}
                        value={this.props.squares[i]}
                        winnerInfor={this.props.winnerInfor && this.props.winnerInfor.includes(i) ? 'winner' : ''}
                        onClick={() => this.props.handleClick(i)} />;
    }

    renderBoard(size){
        const board = Array(size).fill(null);
        for(let i=0; i<size; i++){
            const row = Array(size).fill(null);
            for(let j=0; j<size; j++){
                let key = i*size + j;
                row.push(<span key={key}>{this.renderSquare(key)}</span>);
            }
            board.push(<div key={i}>{row}</div>);
        }
        return board;
    }

    render(){
        return(
            <div>
                <div>{this.renderBoard(this.props.sizeBoard)}</div>
            </div>
        );
    }
}

export default Board;