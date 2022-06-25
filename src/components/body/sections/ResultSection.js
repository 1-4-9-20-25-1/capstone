import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../../store/theme-context';
import Card from '../../UI/Card/Card';
import classes from '../Body.module.css';

function ResultSection(props) {
	const ctx = useContext(ThemeContext);
	const { theme } = ctx;
	const result = props.result && props.result.result.toUpperCase();
	const [resClass, setResClass] = useState(null);
	useEffect(() => {
		if (result === '') {
			setResClass(null);
			return;
		}
		setTimeout(() => {
			if (result === 'POSITIVE') {
				if (theme === 'day') {
					setResClass(classes.pl);
				} else {
					setResClass(classes.pd);
				}
			}
		}, []);
	}, [result, theme]);

	return (
		<Card
			header='RESULT'
			headerStyle={{
				position: 'relative',
			}}
			body={result ? <span className={resClass}>{result}.</span> : ''}
			bodyStyle={{
				textAlign: 'center',
				fontSize: 40,
				fontWeight: 'bold',
				position: 'relative',
				color:
					result && result === 'NEGATIVE'
						? '#519259'
						: result === 'POSITIVE'
						? '#FF6363'
						: '',
			}}
			style={{ height: '40%', justifyContent: 'start' }}
			footerStyle={{
				textAlign: 'center',
			}}
		>
			<div
				className={`${classes.circle} ${result ? classes.expand : ''}`}
			></div>
		</Card>
	);
}

export default ResultSection;
