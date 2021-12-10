import React from 'react';
import { useState, useContext } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ThemeContext from '../../../store/theme-context';

const intro = {
	title: 'What is Diabetic Retinopathy?',
	body: `A complication of diabetes that affects the eyes.
	Diabetic retinopathy is caused by damage to the blood
	vessels in the tissue at the back of the eye (retina).
	Poorly controlled blood sugar is a risk factor.`,
};

function InfoSection() {
	const { theme } = useContext(ThemeContext);

	const [cardStyle, setCardStyle] = useState({ height: '60%' });

	const mouseEnterHandler = () => {
		if (theme === 'day') {
			setCardStyle({ height: '60%', color: '#eceff1' });
		} else {
			setCardStyle({ height: '60%', color: '#37474f' });
		}
	};

	const mouseLeaveHandler = () => {
		setCardStyle({ height: '60%' });
	};
	return (
		<Card
			header={intro.title}
			body={intro.body}
			style={cardStyle}
			footerStyle={{
				marginBottom: 20,
			}}
			headerStyle={{ zIndex: 1 }}
			bodyStyle={{ zIndex: 1 }}
		>
			<a href='https://google.com'>
				<Button
					value={'know more...'}
					onMouseEnter={mouseEnterHandler}
					onMouseLeave={mouseLeaveHandler}
				/>
			</a>
		</Card>
	);
}

export default InfoSection;
