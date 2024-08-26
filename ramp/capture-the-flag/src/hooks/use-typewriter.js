// Inspiration for this custom hook came from https://medium.com/@hamzamakh/typewriter-effect-in-react-a103a4f385c9.
import  { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 500) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = -1;
    const typingInterval = setInterval(() => {
    if (i < text.length - 1) {
      i++;
      setDisplayText(prev => prev + text[i]);
    } else {
      clearInterval(typingInterval);
    }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
