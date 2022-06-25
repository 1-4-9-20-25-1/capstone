import React from 'react';
import classes from './Footer.module.css';
import gitLogo from '../../icons/github.png';
import MailIcon from '../../icons/MailIcon';
import MailOpenIcon from '../../icons/MailOpenIcon';
function Footer(props) {
  const { theme, toggleMail } = props;
  const { footer, day, night, mail, mailOpen, open } = classes;

  return (
    <div className={`${footer}  ${theme === 'day' ? day : night}`}>
      <div className={`${mail} ${mailOpen ? open : ''}`} onClick={toggleMail}>
        {mailOpen ? (
          <MailOpenIcon
            size='30px'
            color={theme === 'day' ? '#263238' : '#eceff1'}
          />
        ) : (
          <MailIcon
            size='30px'
            color={theme === 'day' ? '#263238' : '#eceff1'}
          />
        )}
      </div>
    </div>
  );
}

export default Footer;
