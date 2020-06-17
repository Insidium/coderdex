import React, { Component } from 'react';

class Test extends Component {
	state = {
		test: 'test'
	};
	//LIFECYCLE METHODS

	// componentDidMount executes after component mounts - usually used to call APIs/HTTP requests
	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 		.then((response) => response.json())
	// 		.then((data) =>
	// 			this.setState({ title: data.title, completed: data.completed })
	// 		);
	// }
	// // componentWillMount executes before component mounts
	// componentWillMount() {
	// 	console.log('...componentWillMount');
	// }
	// // componentDidUpdate executes only after component updates
	// componentDidUpdate() {
	// 	console.log('...componentDidUpdate');
	// }
	// // componentDidUpdate executes as component updates - deprecated
	// componentWillUpdate() {
	// 	console.log('...componentWillUpdate');
	// }
	// // componentWillReceiveProps - deprecated - now use getDerivedStateFromProps below
	// componentWillReceiveProps(nextProps, nextState) {
	// 	console.log('...componentWillReceiveProps');
	// }

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	return null;
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('...getSnapshotBeforeUpdate');
	// }

	render() {
		return (
			<div>
				<h1>Test Component</h1>
			</div>
		);
	}
}

export default Test;
