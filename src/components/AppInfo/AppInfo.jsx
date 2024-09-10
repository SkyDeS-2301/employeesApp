import styles from './AppInfo.module.scss'

export const AppInfo = ({ employeeCount, countIncreaseEmployee }) => {
	return (
		<div className={styles.info}>
			<h1>Учет сотрудников в компании Haval</h1>
			<h2>Общее число сотрудников: {employeeCount}</h2>
			<h2>Премию получат: {countIncreaseEmployee}</h2>
		</div>
	);
};
