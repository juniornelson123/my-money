import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}] }

export function init(){
	return [
		selectTab('tabList'),
		showTabs('tabList', 'tabCreate'),
		getList(),
		initialize('billingCycleForm', INITIAL_VALUES)

	]
}

export function getList(){
	const request = axios.get(`${BASE_URL}/billingCycles`)
	return {
		type: "GET_LIST",
		payload: request
	}
}

export function create(values){
	return submit(values, 'post')
	
}

export function update(values){
	return submit(values, 'put')

}

export function showUpdate(billingCycle){
	return [
		selectTab('tabUpdate'),
		showTabs('tabUpdate'),
		initialize('billingCycleForm', billingCycle)
	]

}

export function showDelete(billingCycle){
	return [
		selectTab('tabDelete'),
		showTabs('tabDelete'),
		initialize('billingCycleForm', billingCycle)
	]

}

export function remove(values){
	return submit(values, 'delete')
}

function submit(values, method){
	return dispatch => {
		const id = values._id ? values._id : ''
		axios[method](`${BASE_URL}/billingCycles/${id}`, values)
			.then(resp => {
				toastr.success("Sucesso", "Operação Realizada com sucesso")
				dispatch(init())
			})
			.catch(e => {
				e.response.data.errors.forEach(error => toastr.error("Erro", error))
			})
	}
}