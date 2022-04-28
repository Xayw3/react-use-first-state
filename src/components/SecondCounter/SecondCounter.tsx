import { useState } from 'react';
import './second-counter.scss';
import Button from '../Button/Button';

const SecondCounter = () => {
  const [count, setCount] = useState(0);

  const btns = [
    {
      buttonText: 'Reset',
      buttonAction: () => { setCount(0); },
    },
    {
      buttonText: '+',
      buttonAction: () => { setCount(count + 10); },
    },
    {
      buttonText: '-',
      buttonAction: () => { setCount(count - 10); },
    },
    {
      buttonText: '*',
      buttonAction: () => { setCount(count * 10); },
    },
    {
      buttonText: '/',
      buttonAction: () => { setCount(count / 10); },
    },
  ];

  return (
    <div className="second-counter">
      {
          btns.map(({ buttonText, buttonAction }) => (
            <Button className="second-counter__btn" key={Math.random()} text={buttonText} buttonClick={buttonAction} />
          ))
      }
      <p className="second-counter__text">
        {count}
      </p>
    </div>
  );
};

export default SecondCounter;
