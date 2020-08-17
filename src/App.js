import React, { Component } from 'react';
import Buttons from './Buttons';
import Welcome from './Welcome';
import Dogs from "./Dogs";
import './App.css';
//This is where the app is laid out.


class App extends Component {
	constructor() {
		super();
		this.state = {
			images: "",
		};
	}
	

	render() {
		return (
			<main className='home'>
				<Welcome />
				<div className='doggy'>
          <Dogs images={this.setState.images} />
          </div>

				<div className='buttonSection'>
					<Buttons />
				</div>
			</main>
		);
	}
}

export default App;
