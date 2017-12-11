const FormReducer = (state = {sizeBoard: 0}, action) => {
    switch(action.type){
        case 'INIT_SIZE':{
            return {
                ...state,
                sizeBoard: action.size
            }
        }
        default:
            return state;
    }
}

export default FormReducer;