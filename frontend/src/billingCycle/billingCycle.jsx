import React, {Component} from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

class BillingCycle extends Component{
	
	render(){
		return(
			<div>
				<ContentHeader title="Ciclo de pagamento" small="cadastro"/>
				<Content>		
					<Tabs>
						<TabsHeader>
							
						</TabsHeader>
						<TabsContent>
							<TabHeader label="Listar" icon="bars" target="tabList" />
							<TabHeader label="Incluir" icon="plus" target="tabCreate" />
							<TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
							<TabHeader label="Deletar" icon="trash-o" target="tabDelete" />
						</TabsContent>
					</Tabs>		
				</Content>	
			</div>
			
		)
	}
}

export default BillingCycle