import { calculateWinner } from '../utils/CheckWin';

let initState = {
    history: [{
        squares: Array(0).fill(null),
        moveLocation: ''
    }],
    xIsNext: true,
    sizeBoard: 0,
    amountSteps: 0,
    curPos: -1,
    isReverse :false
};

const GameReducer = (state = initState, action) => {
    switch(action.type){
        case 'INIT_BOARD':{
            return {
                ...state,
                history: [{
                    squares: Array(Number(action.size)*Number(action.size)),
                    moveLocation: ''
                }],
                xIsNext: true,
                sizeBoard: action.size,
                amountSteps: 0,
                curPos: -1,
                isReverse: false
            }
        }
        case 'UPDATE_BOARD':{
            const curState = {...state};    //Get prev state
            const i = action.index;
            const size = curState.sizeBoard;
            let history = curState.history.slice(0, curState.amountSteps+1);
            const squares = history[history.length-1].squares.slice();
            if(squares[i] || calculateWinner(squares, size, curState.xIsNext, curState.curPos)){
                return curState;
            }
            const rowIndex = Math.floor(i/size) + 1;
            const colIndex = (i % size) + 1;
            const moveLocation = [colIndex, rowIndex].join(", ");
            squares[i] = curState.xIsNext ? 'X' : 'O';
            return {
                ...state,
                history: history.concat([
                    {squares: squares,
                    moveLocation: moveLocation}
                ]),
                xIsNext: !curState.xIsNext,
                amountSteps: history.length,
                curPos: i
            }
        }
        case 'MOVE_BACK': {
            const curState = {...state};
            const move = action.move;
            let moveCoordinate = curState.history[move].moveLocation;
            let coordinate = moveCoordinate.split(',');
            let colIndex = parseInt(coordinate[0]);
            let rowIndex = parseInt(coordinate[1]);
            return {
                ...state,
                amountSteps: move,
                xIsNext: (move % 2) ? false : true,
                curPos: (rowIndex-1)*(curState.sizeBoard)+colIndex-1
            }
        }
        case 'CHANGE_REVERSE_STATUS': {
            return {
                ...state,
                isReverse: action.isReverse
            }
        }
        default: 
            return state;
    }
}

export default GameReducer;