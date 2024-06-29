import React, { useState } from 'react';
import './FunFact.css'; // Ensure this file exists

const FunFact = () => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = (index) => {
    setSelected(index);
    if (index === 2) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="funfact-container">
      <div className='fun-fact-circle'>
        <div className='quiz-container'>
          <ul className='twotruths'>
            <li>
              <button 
                type='button' 
                className={`test ${selected === 0 ? (isCorrect ? 'incorrect' : 'selected') : ''}`} 
                onClick={() => handleClick(0)}
              >
                I qualified for the Junior Olympics as a kid
              </button>
            </li>
            <li>
              <button 
                type='button' 
                className={`test ${selected === 1 ? (isCorrect ? 'incorrect' : 'selected') : ''}`} 
                onClick={() => handleClick(1)}
              >
                I entered college as a Political Science Major
              </button>
            </li>
            <li>
              <button 
                type='button' 
                className={`test ${selected === 2 ? 'correct' : ''}`} 
                onClick={() => handleClick(2)}
              >
                My first concert I ever went to was Lady Gaga
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
