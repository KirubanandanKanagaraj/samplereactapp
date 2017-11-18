import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, browserHistory } from 'react-router-dom';

import HomeApp from './components/homeapp';
import Page1App from './components/page1';
import Page2App from './components/page2';

ReactDOM.render(
	<Router history={browserHistory}>
    	<div>
    		<Switch>
		    	<Route path="/page1" component={Page1App} />
		    	<Route path="/page2" component={Page2App} />
		    	<Route exact path="/" component={HomeApp} />
			</Switch>
	    </div>
	</Router>,
  	document.getElementById('app')
);
