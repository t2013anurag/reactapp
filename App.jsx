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

			</div>
		);
	}
}
export default App;