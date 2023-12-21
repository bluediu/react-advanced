import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { IProductCardProps, IProductContextProps } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, product }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

export default ProductCard;
