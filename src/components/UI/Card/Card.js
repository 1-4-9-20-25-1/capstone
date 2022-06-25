import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import classes from './Card.module.css';

function Card(props) {
  const { theme } = useContext(ThemeContext);
  const { buttonHovered: hovered } = props;

  const { header, body, footer } = classes;

  //   console.log(headerClass, hovered);
  return (
    <div
      className={`${classes.card} ${classes[theme]} ${
        hovered ? classes.hovered : ''
      }`}
      style={props.style}
    >
      <div
        className={`${header} ${classes[theme]} ${
          hovered ? classes.hovered : ''
        }`}
        style={props.headerStyle}
      >
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
