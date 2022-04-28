import { useState } from 'react';
import './add-text.scss';
import Button from '../Button/Button';

const AddText = () => {
  const [text, setText] = useState('I like:');

  return (
    <div className="add-text">
      <Button className="add-text__btn" buttonClick={() => setText(`${text} Pizza`)} text="Add 'Pizza'" />
      <p>{text}</p>
    </div>
  );
};

export default AddText;
