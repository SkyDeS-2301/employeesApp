import { Component } from 'react';
import './EmployeeItem.css'

export class EmployeeItem extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			salary: this.props.salary
		}
	}

	onChangeSalary = ( e ) => {
		const salaryValue = parseInt(e.target.value.replace(/\D/g, ''));
		this.setState( { salary: salaryValue } );
		this.props.updateSalary( this.props.id, salaryValue );
	}

	render() {
		const { name, salary, increase, rise, onDelete, onToggleProp } = this.props;
		let classNames = 'list-group-item d-flex justify-content-between';
		classNames += increase ? ' increase' : '';
		classNames += rise ? ' like' : '';


		return (
			<li className={ classNames }>
				<span className="list-group-item-label"
							onClick={ onToggleProp } data-toggle='rise'>{ name }</span>
				<input type="text" className="list-group-item-input"
							 value={ `${ this.state.salary }$` }
							 onChange={ this.onChangeSalary } />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
									className="btn-cookie btn-sm "
									onClick={ onToggleProp }
									data-toggle='increase'>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
									className="btn-trash btn-sm "
									onClick={ onDelete }>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
};