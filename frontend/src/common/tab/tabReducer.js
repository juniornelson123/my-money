const INITIAL_VALUE = { selected: '', visible: {} }

export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'SELECT_TAB':
			return {...state, selected: action.payload}
		case 'TABS_VISIBLE':
			return {...state, visible: action.payload}
		default:
			return state
	}
}