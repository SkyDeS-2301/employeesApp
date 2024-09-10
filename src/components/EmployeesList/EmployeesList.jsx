import styles from './EmployeesList.module.scss'
import { EmployeeItem } from "./EmployeeItem/EmployeeItem.jsx";

export const EmployeesList = ( { data, onDelete, onToggleProp, updateSalary } ) => {
	const elements = data.map( ( item ) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeeItem
				key={ id }
				{ ...item }
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
				updateSalary={updateSalary}/>
		)
	} )

	return (
		<ul className={ styles.list }>
			{ elements }
		</ul>
	);
};