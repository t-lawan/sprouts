
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
