import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import './css/portfolio.scss';
import Home from './pages/Home';
import TopSongs from './pages/TopSongs';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/topsongs'>
						<TopSongs />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
