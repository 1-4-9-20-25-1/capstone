import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import classes from './Button.module.css';

function Button(props) {
	const { theme } = useContext(ThemeContext);
	const size =
		props.size === 'small' ? 'sm' : props.size === 'large' ? 'lg' : 'md';

	const className = `${props.className} ${props.size} ${classes.btn} 
	${classes['btn-' + size]} ${
		theme === 'day' ? classes['btn-day'] : classes['btn-night']
	}`;

	return (
		<button
			className={className}
			style={props.style}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Button;
