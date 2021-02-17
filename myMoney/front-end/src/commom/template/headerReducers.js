/* eslint-disable import/no-anonymous-default-export */
const headerReducer =  (state = {open: false}, action) => {
    switch(action.type){
        case 'TOGGLE_SIDEBAR':
            return {...state, open: !state.open}
        default:
            return state
    }
}
export default headerReducer