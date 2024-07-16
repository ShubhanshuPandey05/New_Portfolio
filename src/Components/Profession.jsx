import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const words = ['FreeLancer', 'Artist', 'WebDeveloper'];
  const [currentWord, setCurrentWord] = useState('');
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isRetracing, setIsRetracing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[index]);
      setDisplayedChars(0); // Reset displayed characters
      setIsRetracing(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [index, words]);

  useEffect(() => {
    if (!isRetracing && displayedChars < currentWord.length) {
      const charInterval = setTimeout(() => {
        setDisplayedChars((prevChars) => prevChars + 1);
      }, 200); // Adjust typing speed here
      return () => clearTimeout(charInterval);
    } else if (!isRetracing && displayedChars === currentWord.length) {
      setIsRetracing(true);
    } else if (isRetracing && displayedChars > 0) {
      const charInterval = setTimeout(() => {
        setDisplayedChars((prevChars) => prevChars - 1);
      }, 150); // Adjust typing speed here
      return () => clearTimeout(charInterval);
    }
  }, [currentWord, displayedChars, isRetracing]);

  return (
    <div>
      <p>{currentWord.substring(0, displayedChars)}</p>
    </div>
  );
};

export default TypingEffect;
