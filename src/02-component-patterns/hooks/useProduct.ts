import { useState } from 'react';

interface IUseProduct {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = (): IUseProduct => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number): void => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
