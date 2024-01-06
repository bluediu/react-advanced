import { useEffect, useRef, useState } from 'react';
import { IOnChangeArgs, IProduct, InitialValues } from '../interfaces';

interface IUseProductOutput {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}

interface IUseProductArgs {
  product: IProduct;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: IOnChangeArgs) => void;
}

export const useProduct = ({
  product,
  value = 0,
  onChange,
  initialValues,
}: IUseProductArgs): IUseProductOutput => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value);
  const isControl = useRef(!!onChange);
  const isMounted = useRef(false);

  const increaseBy = (value: number): void => {
    if (isControl.current) return onChange!({ count: value, product });

    const newValue = Math.min(
      Math.max(counter + value, 0),
      initialValues?.maxCount || Infinity
    );

    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count ?? value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(initialValues?.count || value);
  }, [value, initialValues]);

  const isMaxCountReached =
    !!initialValues?.maxCount && initialValues.maxCount === counter;

  return {
    counter,
    isMaxCountReached,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
