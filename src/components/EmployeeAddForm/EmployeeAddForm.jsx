import { Component } from 'react';
import './EmployeeAddForm.css'

export class EmployeeAddForm extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			name: '',
			salary: '',
		};
	}


	onHandleInput = ( e ) => {
		this.setState( {
			[ e.target.getAttribute( 'name' ) ]: e.target.value,
		} );
	}
	addNewItem = (e) => {
		e.preventDefault();
		const {name, salary} = this.state;
		this.props.addItem(name, salary);
		this.setState({
			name: '',
			salary: ''
		});
	}
	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					onSubmit={this.addNewItem}
					className="add-form d-flex">
					<input type="text"
								 className="form-control new-post-label"
								 placeholder="Как его зовут?"
								 name='name'
								 onChange={ this.onHandleInput }
								 value={ name } />
					<input type="number"
								 className="form-control new-post-label"
								 placeholder="З/П в $?"
								 name='salary'
								 onChange={ this.onHandleInput }
								 value={ salary } />

					<button type="submit"
									className="btn btn-outline-light">Добавить
					</button>
				</form>
			</div>
		);
	}
};