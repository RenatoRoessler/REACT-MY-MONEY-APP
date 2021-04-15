const INITIAL_STATE = { selected: '', visible: {}}

export default (state =  INITIAL_STATE, actions) => {
    switch (actions.type) {
        case 'TAB_SELECTED':
            return {...state, selected: actions.payload}
        case 'TAB_SHOWED':
            return {...state, visible : actions.payload}
        default:
            return state
    }
}