import { FC } from 'react';
import './button.scss';

type ButtonProps = {
    text: string,
    className?: string,
    buttonClick?: () => void,
}

const Button:FC<ButtonProps> = ({ text, className, buttonClick }) => (
  <button className={`btn ${className}`} onClick={buttonClick}>{text}</button>
);

export default Button;
