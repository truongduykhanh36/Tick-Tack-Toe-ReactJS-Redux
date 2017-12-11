import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import {handleClick} from '../creators/GameActionCreator';
import { calculateWinner } from '../utils/CheckWin';

class BoardContainer extends React.Component{
    render(){
        const winnerInfor = calculateWinner(this.props.squares, this.props.size, this.props.xIsNext, this.props.curPos);

        return (
            <Board sizeBoard={this.props.size}
                    squares={this.props.squares}
                    curPos={this.props.curPos}
                    winnerInfor={winnerInfor && winnerInfor.winnerLocation}
                    handleClick={(index) => this.props.handleClick(index)}
                    />
        );
    }
}

const mapStateToProps = state => {
    return {
        size: state.FormReducer.sizeBoard,
        squares: state.GameReducer.history[state.GameReducer.amountSteps].squares,
        curPos: state.GameReducer.curPos,
        xIsNext: state.GameReducer.xIsNext
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (index) => {
            dispatch(handleClick(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);