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
			]
		}
	}

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

				<table>
					<tbody>
						{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
					</tbody>
				</table>

			</div>
		);
	}
}

// other compnents (Stateless)

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