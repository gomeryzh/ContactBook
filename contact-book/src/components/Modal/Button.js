import React from 'react';
import * as s from './Button.module.css';

const Button = ({ label, onClick }) => (
  <button className={s.Button} type="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
