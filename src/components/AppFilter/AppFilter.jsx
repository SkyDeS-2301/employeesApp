import styles from './AppFilter.module.scss';

export const AppFilter = ( props ) => {

	const buttonsData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rise', label: 'На повышение' },
		{ name: 'more1000', label: 'З/П больше 1000$' },
	];

	const buttons = buttonsData.map( ( { name, label } ) => {
		const active = props.filter === name;
		const classes = active ? `${ styles.btn } btn-light` : `${ styles.btn } btn-outline-light`
		return (
			<button
				key={ name }
				className={ classes }
				type='button'
				onClick={ ( e ) => props.updateFilter( name ) }>
				{ label }
			</button>
		)
	} );

	return (
		<>
			{ buttons }
		</>
	);
};