import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				)
			};
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [action.payload, ...state.contacts]
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'Ryan Challen',
				email: 'ryan@ryan.com',
				phone: '0412 345 678'
			},
			{
				id: 2,
				name: 'Carlie Hamilton',
				email: 'carlie@carlie.com',
				phone: '0423 456 789'
			},
			{
				id: 3,
				name: 'Gen Carter',
				email: 'gen@gen.com',
				phone: '0434 567 890'
			}
		],
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
