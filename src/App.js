import styles from './App.module.css';
import { useContext, useState } from 'react';
import ThemeContext from './store/theme-context';

import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
	const { theme, changeTheme } = useContext(ThemeContext);
	const { app, 'app-bg-day': appBgDay, 'app-bg-night': appBgNight } = styles;
	const [mail, setMail] = useState(false);
	return (
		<div className={`${app} ${theme === 'day' ? appBgDay : appBgNight}`}>
			<Navbar theme={theme} changeTheme={changeTheme} />
			<Body theme={theme} mailVisible={mail} />
			<Footer
				theme={theme}
				toggleMail={() => setMail(!mail)}
				mailOpen={mail}
			/>
		</div>
	);
}

export default App;
