export const initBoard = size => {
    return {
        type: 'INIT_BOARD',
        size: size
    }
}

export const handleClick = (index) => {
    return {
        type: 'UPDATE_BOARD',
        index: index
    }
}

export const handleMoveBack = (move) => {
    return {
        type: 'MOVE_BACK',
        move: move
    }
}

export const updateReverse = (curIsReverse) => {
    return {
        type: 'CHANGE_REVERSE_STATUS',
        isReverse: !curIsReverse
    }
} 