import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface TypingAnimationProps {
  textArray: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ textArray }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

  useEffect(() => {
    if (currentTextIndex < textArray.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
        
        if (currentCharIndex >= textArray[currentTextIndex].length) {
          setCurrentCharIndex(0);
          setCurrentTextIndex((prev) => prev + 1);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, currentCharIndex, textArray]);

  return (
    <div>
      {textArray.slice(0, currentTextIndex).map((line, index) => (
        <Typography key={index} variant="body1">{line}</Typography>
      ))}
      {currentTextIndex < textArray.length && (
        <Typography variant="body1" color='primary'>
          {textArray[currentTextIndex].slice(0, currentCharIndex)}
        </Typography>
      )}
    </div>
  );
};

export default TypingAnimation;
