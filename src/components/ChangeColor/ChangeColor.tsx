import { useState } from 'react';
import './change-color.scss';
import Button from '../Button/Button';

const ChangeColor = () => {
  const [color, setColor] = useState('#333000');

  return (
    <div className="color-wrapper">
      <Button className="color-wrapper__btn" buttonClick={() => { setColor('#fff312'); }} text="Change box color" />
      <div className="color-box" style={{ backgroundColor: color }} />
    </div>
  );
};

export default ChangeColor;
