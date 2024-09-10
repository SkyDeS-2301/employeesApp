import { Component } from 'react';
import styles from './SearchPanel.module.scss';

export class SearchPanel extends Component {
	constructor( props ) {
		super( props )

		this.state = {
			word: '',
		};
	}

	changeValueInput = (e) => {
		const word = e.target.value;
		this.setState({
			word
		});
		this.props.updateSearch(word);
	}

	render() {

		return (
			<input
				type="text"
				className={ `form-control ${ styles.searchPanel }` }
				placeholder='Найти сотрудника'
				value={this.state.word}
				onChange={this.changeValueInput}
			/>
		);
	}
};