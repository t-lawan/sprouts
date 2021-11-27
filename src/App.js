
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AR from './Pages/AR';


function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} exact path={"/"} />
				<Route component={AR} exact path={"/ar"} />
			</Switch>
		</Router>
	);
}

export default App;
