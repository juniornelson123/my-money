import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
	<HashRouter>
		<Switch>
			<Route path="/billingCycles" component={BillingCycle} />
			<Route path="/dashboard" component={Dashboard} />
			<Redirect from="*" to="/dashboard" />
		</Switch>
	</HashRouter>
)