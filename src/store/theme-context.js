import React, { useState } from 'react';

const ThemeContext = React.createContext({
	theme: 'day',
	changeTheme: () => {},
});

export const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState('day');
	return (
		<ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
