import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  IOnChangeArgs,
  IProduct,
  IProductCardHandlers,
  IProductContextProps,
  InitialValues,
} from '../interfaces';

import styles from '../styles/styles.module.css';
import { IStylesProps } from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps extends IStylesProps {
  children: (args: IProductCardHandlers) => JSX.Element;
  product: IProduct;
  value?: number;
  onChange?: (args: IOnChangeArgs) => void;
  initialValues?: InitialValues;
}

const ProductCard = ({
  children,
  product,
  value,
  className,
  style,
  onChange,
  initialValues,
}: IProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      product,
      onChange,
      value,
      initialValues,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

export default ProductCard;
