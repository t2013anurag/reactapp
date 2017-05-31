import React from 'react';

class App extends React.Component {
	render() {
			var i = 1;
			var myStyle = {
				fontSize : 18,
				color : 'red'
			}

		return (
			<div style = {myStyle}>
				Hello World!!
			
				{i == 1 ? 'True' : 'False'}

				<Header/>
				<Content/>

			</div>
		);
	}
}

// other compnents

class Header extends React.Component {
	render() {
		return (
			<div>
				Hello Doe, John
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				Welcome Doe, John. This is React.
			</div>
		);
	}
}


export default App;