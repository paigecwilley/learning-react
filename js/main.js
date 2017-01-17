 import React from 'react'
import ReactDOM from 'react-dom'
import {
	Router,
	Route,
	Redirect,
	IndexRoute,
	browserHistory
} from 'react-router'

import App from './containers/App'

ReactDOM.render(
		<Router history={browserHistory}>
			<Route path='/' component={App}/>
		</Router>
		, document.getElementById('app'))