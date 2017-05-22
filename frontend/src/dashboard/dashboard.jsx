import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {getSummary} from './dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component{
	
	componentWillMount(){
		this.props.getSummary()
	}	


	render(){
		return(
			<div>
				<ContentHeader title="Dashboard" small="Versão 1.0"/>
				<Content>		
					<Row>
						<ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${this.props.summary.credit}`} text="Total de creditos"/>
						<ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${this.props.summary.debt}`}  text="Total de debitos"/>
						<ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${this.props.summary.credit - this.props.summary.debt}`}  text="Valor consolidado"/>
					</Row>		
				</Content>				
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	summary: state.dashboard.summary
})

const mapDispatchToProps = (dispatch) => {return bindActionCreators({getSummary},dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)