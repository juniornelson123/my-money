const INITIAL_VALUE = { selected: '' }

export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'SELECT_TAB':
			return {...state, selected: action.payload}
		default:
			return state
	}
}