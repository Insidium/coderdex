import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Header branding='Coderdex' />
			<Contact name='Ryan Challen' email='ryan@ryan.com' phone='0412 345 678' />
			<Contact
				name='Carlie Hamilton'
				email='carlie@carlie.com'
				phone='0423 456 789'
			/>
		</div>
	);
}

export default App;
