import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('100');

  const clean = () => {
    setNumber('0');
  };

  return {
    number,
    clean,
  };
};
