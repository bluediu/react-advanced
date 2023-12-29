import { useEffect, useRef, useState } from 'react';
import { IOnChangeArgs, IProduct } from '../interfaces';

interface IUseProductOutput {
  counter: number;
  increaseBy: (value: number) => void;
}

interface IUseProductArgs {
  product: IProduct;
  value?: number;
  onChange?: (args: IOnChangeArgs) => void;
}

export const useProduct = ({
  product,
  value = 0,
  onChange,
}: IUseProductArgs): IUseProductOutput => {
  const [counter, setCounter] = useState(value);
  const isControl = useRef(!!onChange);

  const increaseBy = (value: number): void => {
    if (isControl.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
