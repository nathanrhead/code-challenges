import React from 'react';
import { useTypewriter } from '../hooks/use-typewriter';

const Typewriter = ({ flag }) => {
  const displayText = useTypewriter(flag);
  
  console.log({displayText});

  return (
    <div>
      {/* Displays the text horizontally, letter by letter.
      <h1 className="typewriter">{displayText}</h1> 
      */}
      {/* Displays the text vertically, letter by letter. */}
      <ul style={{listStyleType: 'none', fontSize: '3rem'}}>
        {displayText.split('').map((letter, key) => (
          <li key={key}>{letter}</li>
      ))}
      </ul>
    </div>
  )
};

export default Typewriter;