import React from 'react';
import './Box.css';

function Box({ onBoxClick }) {
  return (
    <div className='box'>
      <div className='boxer' onClick={() => onBoxClick('Write a short motivational quote for my day.')}>
        <>Write a short motivational quote for my day.</>
        <img src="https://img.icons8.com/?size=100&id=5VCjh4Z7SWAB&format=png&color=000000" alt="compass" />
      </div>
      <div className='boxer' onClick={() => onBoxClick('Write a short to-do list for a productive day.')}>
        <>Write a short to-do list for a productive day.</>
        <img src="https://img.icons8.com/?size=100&id=82797&format=png&color=000000" alt="idea" />
      </div>
      <div className='boxer' onClick={() => onBoxClick('Generate a cool nickname for me.')}>
        <>Generate a cool nickname for me.</>
        <img src="https://img.icons8.com/?size=100&id=Wr3bJeh5mdTO&format=png&color=000000" alt="ai" />
      </div>
      <div className='boxer' onClick={() => onBoxClick('Give some suggested movie which I should watch this weekend.')}>
        <>Give some suggested movie which I should watch in this weekend</>
        <img src="https://img.icons8.com/?size=100&id=-Jn1yL3skvIq&format=png&color=000000" alt="div" />
      </div>
    </div>
  );
}

export default Box;

