import React, { useState } from 'react';
import './FunFact.css'; // Ensure this file exists

const FunFact = () => {
  const [selected, setSelected] = useState(null);
  const [description, setDescription] = useState('');

  const handleClick = (index) => {
    setSelected(index);
    switch (index) {
      case 0:
        setDescription(' This is True! The races I normally ran were the 200m, 400m, and the 4x100 relay');
        break;
      case 1:
        setDescription('This is True! I was a Poltical Science Major at first, but after I took the Intro to Programming course my first quarter as a freshman, I enjoyed it so much I switched to CS :))');
        break;
      case 2:
        setDescription(' The is the Lie! My first concert was actually One Direction :P pre-Zayn breakup');
        break;
      default:
        setDescription('');
    }
  };

  const truths = [
    'I qualified for the Junior Olympics as a kid',
    'I entered college as a Political Science Major',
    'My first concert I ever went to was Lady Gaga'
  ];

  return (
    <div className='quiz-container'>
      <div className='title'>
        <h2>Two Truths and a Lie</h2>
        <h3>Guess the lie...</h3>
      </div>
      <ul className='twotruths'>
        {truths.map((truth, index) => (
          <li key={index}>
            <button
              type='button'
              className={`test ${selected === index ? (selected !== 2 ? 'incorrect' : 'correct') : ''}`}
              onClick={() => handleClick(index)}
            >
              {selected === index ? description : truth}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunFact;

