import React from 'react';

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			data : [
				{
					"id" : 1,
					"name" : "John",
					"age" : 20
				},
				{
					"id" : 2,
					"name" : "Johnny",
					"age" : 40
				},
				{
					"id" : 3,
					"name" : "Johnathan",
					"age" : 40
				},
			],

			header : "This is the Header Content in state",
			content : "This is the Content.",

			stateData : []
		}

		// setting state handler
		this.setStateHandler = this.setStateHandler.bind(this);
	};

	// setting data to stateData
	setStateHandler() {
		var item = 'setState...';
		var myArray = this.state.stateData;
		myArray.push(item);
		this.setState({stateData : myArray})
	};

	render() {
			var i = 1;
			var myStyle = {
				fontSize : 18,
				color : 'red'
			}

		return (
			<div style = {myStyle}>
				Hello World!!
				<br/>
				{i == 1 ? 'True' : 'False'}

				<Header headerProp = {this.state.header}/>
				<Content contentProp = {this.state.content}/>

				<table>
					<tbody>
						{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
					</tbody>
				</table>

				<button onClick = {this.setStateHandler}>SET STATE</button>
				<h3>State Array : {this.state.stateData}</h3>

			</div>
		);
	}
}


// other compnents (Stateless)
class Header extends React.Component {
	render() {
		return (
			<div>
				{this.props.headerProp}
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				{this.props.contentProp}
			</div>
		);
	}
}


// Stateful components 
class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}


export default App;