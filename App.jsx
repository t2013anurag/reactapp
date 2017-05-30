import React from 'react';

class App extends React.Component {
	render() {
			var i = 1;

		return (
			<div>
				Hello World!!
			
				{i == 1 ? 'True' : 'False'}
			</div>
		);
	}
}
export default App;