import { useState } from 'react';
import './if-clicked.scss';
import Button from '../Button/Button';

const IfClicked = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="clicked-wrapper">
      <Button text="Change on 'Clicked'" buttonClick={() => { setClicked(true); }} className="clicked-wrapper__btn" />
      <p className="clicked-wrapper__text">
        {clicked ? 'Clicked' : 'Not Clicked'}
      </p>
    </div>
  );
};

export default IfClicked;
