export function selectTab(tabId){
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
export function disableTabFalse(){
    return{
        type: 'TAB_DISABLE_FALSE',
        payload: false
    }
}
export function disableTabtrue(){
    return{
        type: 'TAB_DISABLE_TRUE',
        payload: true
    }
}

