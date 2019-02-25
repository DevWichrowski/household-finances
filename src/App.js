import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Main />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
