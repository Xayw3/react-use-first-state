import './number-array-actions.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberArrayActions = () => {
  const [numArr, setNumArr] = useState([...numbers]);

  const btns = [
    {
      title: 'Remove from end',
      action: () => { setNumArr(numArr.slice(0, -1)); },
    },
    {
      title: 'Remove from start',
      action: () => { setNumArr(numArr.slice(1)); },
    },
    {
      title: 'Reset',
      action: () => { setNumArr([...numbers]); },
    },
    {
      title: 'Remove all',
      action: () => { setNumArr(numArr.slice(-1, 0)); },
    },
    {
      title: 'Show > 5',
      action: () => { setNumArr(numArr.filter((el) => el > 5)); },
    },
    {
      title: 'All numbers x2',
      action: () => { setNumArr(numArr.map((el) => el * 2)); },
    },
    {
      title: 'All numbers / 10',
      action: () => { setNumArr(numArr.map((el) => el / 10)); },
    },
  ];

  return (
    <div className="number-actions">
      <div className="number-actions__btns">
        {
            btns.map(({ title, action }) => (
              <Button key={Math.random()} text={title} buttonClick={action} />
            ))
        }
      </div>
      <div className="number-actions__wrapper">
        {
            numArr.map((el) => (
              <button
                className="number-actions__num"
                onClick={() => { setNumArr(numArr.filter((e) => e !== el)); }}
                key={Math.random()}
              >
                {el}
              </button>
            ))
        }
      </div>
    </div>
  );
};

export default NumberArrayActions;
