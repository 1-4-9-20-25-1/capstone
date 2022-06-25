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

  const [hovered, setHovered] = useState(false);

  const mouseEnterHandler = () => {
    setHovered(true);
  };

  const mouseLeaveHandler = () => {
    setHovered(false);
  };
  return (
    <Card
      header={intro.title}
      body={intro.body}
      style={{ height: '60%' }}
      footerStyle={{
        marginBottom: 20,
      }}
      buttonHovered={hovered}
      bodyStyle={{ zIndex: 1 }}
    >
      <a href='https://www.bing.com/search?q=diabetic+retinopathy&cvid=92442135a1f84ea0b5945fbd47e9ad7c&aqs=edge.1.69i57j0l6j69i60l2.8079j0j1&pglt=675&FORM=ANNTA1&PC=HCTS'>
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
