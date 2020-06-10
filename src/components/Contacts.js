import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
		]
	};

	render() {
		const { contacts } = this.state;
		return (
			<React.Fragment>
				{contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))}
			</React.Fragment>
		);
	}
}

export default Contacts;
