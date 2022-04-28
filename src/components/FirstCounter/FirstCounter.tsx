import { useState } from 'react';
import './first-counter.scss';
import Button from '../Button/Button';

const FirstCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="first-counter">
      <Button text="Reset" className="first-counter__btn" buttonClick={() => { setCount(0); }} />
      <Button text="+" className="first-counter__btn" buttonClick={() => { setCount(count + 1); }} />
      <Button text="-" className="first-counter__btn" buttonClick={() => { setCount(count - 1); }} />
      <p className="first-counter__text">{count}</p>
    </div>
  );
};

export default FirstCounter;
