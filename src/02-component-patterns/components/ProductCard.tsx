import { ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { IProduct, IProductContextProps } from '../interfaces';

import styles from '../styles/styles.module.css';
import { IStylesProps } from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps extends IStylesProps {
  children?: ReactElement | ReactElement[];
  product: IProduct;
}

const ProductCard = ({ children, product, className, style }: IProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;

export default ProductCard;
