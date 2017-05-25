import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'

class BillingCycle extends Component{
	
	render(){
		return(
			<div>
				<ContentHeader title="Ciclos de Pagamento" small="cadastro"/>
				<Content>
					Ciclo de pagamento	
				</Content>
			</div>
			
		)
	}
}

export default BillingCycle