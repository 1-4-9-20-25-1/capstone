import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import classes from './Card.module.css';

function Card(props) {
	const { theme } = useContext(ThemeContext);

	const {
		'card-body': cardBody,
		'card-night': night,
		'card-day': day,
		header,
		body,
		footer,
	} = classes;

	return (
		<div
			className={`${cardBody} ${theme === 'day' ? day : night}`}
			style={props.style}
		>
			<div className={header} style={props.headerStyle}>
				{props.header}
			</div>
			<div className={body} style={props.bodyStyle}>
				{props.body}
			</div>
			<div className={footer} style={props.footerStyle}>
				{props.children}
			</div>
		</div>
	);
}

export default Card;
