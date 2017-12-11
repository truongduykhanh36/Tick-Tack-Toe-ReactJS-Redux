import React from 'react';
import { connect } from 'react-redux';
import History from '../components/History';
import { handleMoveBack, updateReverse } from '../creators/GameActionCreator';
import { calculateWinner } from '../utils/CheckWin';

class HistoryContainer extends React.Component{
    render(){
        const curBoardInfor = this.props.boardState;
        let stt = "";
        if(calculateWinner(curBoardInfor.history[curBoardInfor.amountSteps].squares, curBoardInfor.sizeBoard, curBoardInfor.xIsNext, curBoardInfor.curPos)){
            stt = "Winner is " + (curBoardInfor.xIsNext ? 'O' : 'X');
        }else if(curBoardInfor.amountSteps === curBoardInfor.sizeBoard*curBoardInfor.sizeBoard){
            if(curBoardInfor.amountSteps === 0){
                stt = "You should enter size to init game board.";
            }else{
                stt = "No one wins";
            }
        }else{
            stt = "Next player is: " + (curBoardInfor.xIsNext ? 'X' : 'O');
        }

        const moves = curBoardInfor.history.map((step, move) => {   //move <==> index in array
            let movement = "";
            if(curBoardInfor.amountSteps !== 0){
                movement = (move) ? `Move #${move} (${step.moveLocation})` : 'Start Game';
            }
            let class_for_a_tag = (move === curBoardInfor.history.length - 1 ? 'topmove' : '');
            return <li key={move}><a onClick={() => this.props.moveBack(move)} className={class_for_a_tag} >{movement}</a></li>
        });

        const isReverse = curBoardInfor.isReverse;
        return (
            <History    
                status={stt}
                moves={(isReverse) ? [].concat(moves.slice(0, 1), moves.slice(1).reverse()) : moves}
                onClick={() => this.props.handleClickReverseButton(curBoardInfor.isReverse)}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        boardState: state.GameReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveBack: (move) => {
            dispatch(handleMoveBack(move))
        },
        handleClickReverseButton: (curIsReverse) => {
            dispatch(updateReverse(curIsReverse))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);