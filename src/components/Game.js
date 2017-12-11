import React from 'react';
import FormContainer from '../containers/FormContainer';
import BoardContainer from '../containers/BoardContainer';
import HistoryContainer from '../containers/HistoryContainer';

class Game extends React.Component{
    render(){
        return (
            <div id="game">
                <div id="head">
                    <FormContainer />
                </div>
                <hr />
                <div id="divBoard">
                    <div id="board">
                        <BoardContainer />
                    </div>
                    <div id="game-detail">
                        <HistoryContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;