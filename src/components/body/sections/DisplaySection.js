import React from 'react';
import Card from '../../UI/Card/Card';
import classes from '../Body.module.css';

function DisplaySection(props) {
	const { image } = props;

	const imageContent = image ? (
		<div>
			<img
				className={image && classes.upload}
				src={image}
				alt='uploaded'
				height='150px'
			/>
		</div>
	) : (
		<h1>* _ *</h1>
	);

	return (
		<Card
			header={'UPLOADED IMAGE'}
			body={imageContent}
			bodyStyle={{
				textAlign: 'center',
				height: 150,
			}}
			style={{ height: '60%' }}
		></Card>
	);
}

export default DisplaySection;
