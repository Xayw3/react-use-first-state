import { useState } from 'react';
import Button from '../Button/Button';
import './text-from-input.scss';

const TextFromInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState('');

  return (
    <div className="input-box">
      <Button className="input-box__btn" text="Show text" buttonClick={() => setShowText(inputValue)} />
      <div className="input-box__wrapper">
        <input
          className="input-box__input"
          value={inputValue}
          type="text"
          onChange={(el) => {
            setInputValue(el.target.value);
          }}
        />
        <p className="input-box__text">
          {showText}
        </p>
      </div>
    </div>
  );
};

export default TextFromInput;
