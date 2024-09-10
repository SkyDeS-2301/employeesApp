import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AppInfo } from "../AppInfo/AppInfo.jsx";
import { SearchPanel } from "../SearchPanel/SearchPanel.jsx";
import { AppFilter } from "../AppFilter/AppFilter.jsx";
import { EmployeesList } from "../EmployeesList/EmployeesList.jsx";
import { EmployeeAddForm } from "../EmployeeAddForm/EmployeeAddForm.jsx";

import styles from './App.module.scss'

export class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: [
				{ id: uuidv4(), name: 'Dwayne Johnson', salary: 1500, increase: true, rise: true },
				{ id: uuidv4(), name: 'Jason Momoa', salary: 1250, increase: false, rise: true },
				{ id: uuidv4(), name: 'Jason Statham', salary: 750, increase: false, rise: false },
			],
			searchWord: '',
			filter: 'all',
		};
	}

	deleteItem = ( id ) => {
		this.setState( ( { data } ) => {
			const filteredData = data.filter( item => item.id !== id );
			return {
				data: filteredData,
			}
		} );
	}

	addItem = ( name, salary ) => {
		if ( !name ) return;
		if ( !salary ) salary = 0;
		const newItem = { id: uuidv4(), name, salary, increase: false, rise: false };
		const newData = [ ...this.state.data, newItem ];
		this.setState( { data: newData } );
	}

	onToggleProp = ( id, prop ) => {
		this.setState( ( { data } ) => {

			const findEl = data.find( item => item.id === id );
			if ( findEl ) {
				const newData = data.map( item => {
					if ( item === findEl ) {
						return { ...item, [ prop ]: !item[ prop ] }
					}
					return item
				} )
				return {
					data: newData
				}
			}
		} );
	}

	searchEmp = ( data, word ) => {
		if ( word.length === 0 ) {
			return data
		}

		return data.filter( item => {
			return item.name.toLowerCase().includes( word.toLowerCase() );
		} );
	}

	updateSearch = ( word ) => {
		this.setState( { searchWord: word } )
	}

	filterEmp = ( data, filter ) => {
		if ( filter === 'all' ) {
			return data
		}
		if ( filter === 'rise' ) {
			return data.filter( item => item.rise )
		}
		if ( filter === 'more1000' ) {
			return data.filter( item => item.salary > 1000 );
		}
	}

	updateFilter = ( filter ) => {
		this.setState( { filter } )
	}

	updateSalary = ( id, salary ) => {
		this.setState( ( { data } ) => {
			const findEl = data.find( item => item.id === id );
			if ( findEl ) {
				const newData = data.map( item => {
					if ( item === findEl ) {
						return { ...item, salary }
					}
					return item
				} )

				return { data: newData };
			}
		} );
	}

	render() {
		const { data, searchWord, filter } = this.state;
		const employeesCount = data.length;
		const employeeIncreaseCount = data.filter( item => item.increase ).length
		const visibleData = this.filterEmp( this.searchEmp( data, searchWord ), filter )


		return (
			<div className={ styles.app }>
				<AppInfo
					employeeCount={ employeesCount }
					countIncreaseEmployee={ employeeIncreaseCount } />

				<div className={ styles.searchPanel }>
					<SearchPanel updateSearch={ this.updateSearch } />
					<AppFilter filter={ filter } updateFilter={ this.updateFilter } />
				</div>

				<EmployeesList
					data={ visibleData }
					onDelete={ this.deleteItem }
					onToggleProp={ this.onToggleProp }
					updateSalary={this.updateSalary}/>

				<EmployeeAddForm addItem={ this.addItem } />

			</div>
		)
	}
};