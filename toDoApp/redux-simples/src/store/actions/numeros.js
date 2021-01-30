//Action Creator
export function changeNewMinNumber(newNumber){
    return{
        type: 'NUM_MIN_ALTERADO',
        payload: newNumber
    }
}

export function changeNewMaxNumber(newNumber){
    return{
        type: 'NUM_MAX_ALTERADO',
        payload: newNumber
    }
}