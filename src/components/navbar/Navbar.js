import React, { useState } from 'react';
import classes from './Navbar.module.css';
import sunIcon from '../../icons/sun.svg';
import moonIcon from '../../icons/moon.svg';

function Navbar(props) {
	const { theme, changeTheme } = props;

	const {
		nav,
		change,
		icon: iconClass,
		'icon-holder': iconHolder,
		'nav-bg-day': navBgDay,
		'nav-bg-night': navBgNight,
		title,
	} = classes;

	const [night, setNight] = useState(false);

	const changeThemeHandler = () => {
		setNight(!night);
		(async () => {
			await setTimeout(() => {
				if (theme === 'day') {
					changeTheme('night');
				} else {
					changeTheme('day');
				}
			}, 100);
		})();
	};

	return (
		<div className={`${nav} ${theme === 'day' ? navBgDay : navBgNight}`}>
			<div className={title}>SAVE TIME</div>
			<div className={iconHolder}>
				<img
					src={theme === 'day' ? moonIcon : sunIcon}
					className={`${iconClass} ${night ? change : ''}`}
					onClick={changeThemeHandler}
					alt='sum moon'
				/>
			</div>
		</div>
	);
}

export default Navbar;

// <div className={menu}>
// <a href='#' className={menuItem}>
// 	HOME
// </a>
// <a href='#' className={menuItem}>
// 	ABOUT
// </a>
// </div>
