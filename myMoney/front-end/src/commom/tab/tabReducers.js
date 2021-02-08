/* eslint-disable import/no-anonymous-default-export */
const INITIAL_SATE = {selected: '1', visible: true};

export default (state = INITIAL_SATE, action) => {
    switch (action.type){
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload}
        case 'TAB_DISABLE_FALSE':
            return {...state, visible: action.payload}
        case 'TAB_DISABLE_TRUE':
            return {...state, visible: action.payload}
        default:
            return state
    }
}