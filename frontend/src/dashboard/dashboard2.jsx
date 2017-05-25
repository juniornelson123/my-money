import React,{Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'


const BASE_URL = "http://localhost:3003/api"
export default class Dashboard extends Component{
	constructor(props){
		super(props)

		this.state = {credit: 0, debt: 0}
		this.getSummary()
	}

	getSummary(){
		axios.get(`${BASE_URL}/billingCycles/summary`)
			.then(resp => this.setState(resp.data))
	}

	render(){
		return(
			<div>
				<ContentHeader title="Dashboard" small="Versão 2.0"/>
				<Content>		
					<Row>
						<ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${this.state.credit}`} text="Total de creditos"/>
						<ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${this.state.debt}`}  text="Total de debitos"/>
						<ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${this.state.credit - this.state.debt}`}  text="Valor consolidado"/>
					</Row>		
				</Content>				
			</div>
		)
	}
}