import { useContext, useCallback } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import { IStylesProps } from '../interfaces';

export const ProductButtons = ({ className, style }: IStylesProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxCountReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxCountReached() && styles.disabled
        }`}
        disabled={isMaxCountReached()}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
