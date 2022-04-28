import { useState } from 'react';
import Button from '../Button/Button';
import './card.scss';

// interface CardsInterface {
//   title: string,
//   id: number,
// }

const cards = [
  {
    id: 1,
    title: 'First card',
  },
  {
    id: 2,
    title: 'Second card',
  },
  {
    id: 3,
    title: 'Third card',
  },
  {
    id: 4,
    title: 'Fourth card',
  },
  {
    id: 5,
    title: 'Fifth card',
  },
  {
    id: 6,
    title: 'Sixth card',
  },
];

const Card = () => {
  const [card, setCard] = useState([...cards]);

  const btns = [
    {
      text: 'Reset',
      action: () => { setCard([...cards]); },
    },
    {
      text: 'Remove all',
      action: () => { setCard(card.slice(-1, 0)); },
    },
    {
      text: 'Makes all titles uppercase',
      action: () => {
        setCard(card.map((el) => ({ ...el, title: el.title.toUpperCase() })));
      },
    },
  ];

  return (
    <div className="cards">
      {
        btns.map(({ text, action }) => (
          <Button text={text} className="cards__btn" buttonClick={action} />
        ))
      }
      <div className="card">
        {
          card.map((el) => (
            <div className="card__item">
              <span>{el.id}</span>
              <button
                onClick={() => { setCard(card.filter((e) => e !== el)); }}
              >
                X
              </button>
              <h3 className="card__title">{el.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Card;
