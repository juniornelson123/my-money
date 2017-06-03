const INITIAL_VALUE = { list: [] }

export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'GET_LIST':
			return {...state, list: action.payload.data}
		default:
			return state	

	}
}