import React from 'react'
import { Router, Route, IndexRoute ,Redirect, hashHistory} from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycles/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path='billingCycle' component={BillingCycle}></Route>
        </Route>   
        
        <Redirect from='*' to='/' ></Redirect>
    </Router>
)