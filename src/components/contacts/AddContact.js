import React, { Component } from 'react';

class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: ''
	};
	render() {
		return (
			<div className='card mb3'>
				<div className='card-header'>Add Contact</div>
				<div className='card-body'>
					<form>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								className='form-control form-control-lg'
								placeholder='Enter name...'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								className='form-control form-control-lg'
								placeholder='Enter email...'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='phone'>Phone</label>
							<input
								type='text'
								name='phone'
								className='form-control form-control-lg'
								placeholder='Enter phone number...'
							/>
						</div>
						<input
							type='submit'
							value='Add Contact'
							className='btn btn-light btn-block'
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default AddContact;
