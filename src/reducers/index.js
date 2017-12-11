import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import GameReducer from './GameReducer';

const GameApp = combineReducers({
    FormReducer, GameReducer
});

export default GameApp;