import React from 'react';
import Card from '../../UI/Card/Card';
// import classes from '../Body.module.css';

function ResultSection(props) {
	return (
		<Card
			header='RESULT'
			body={props.result && props.result.result.toUpperCase() + '.'}
			bodyStyle={{
				textAlign: 'center',
				fontSize: 40,
				fontWeight: 'bold',
			}}
			style={{ height: '40%', justifyContent: 'start' }}
		></Card>
	);
}

export default ResultSection;
