import { ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { IOnChangeArgs, IProduct, IProductContextProps } from '../interfaces';

import styles from '../styles/styles.module.css';
import { IStylesProps } from '../interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps extends IStylesProps {
  children?: ReactElement | ReactElement[];
  product: IProduct;
  value?: number;
  onChange?: (args: IOnChangeArgs) => void;
}

const ProductCard = ({
  children,
  product,
  value,
  className,
  style,
  onChange,
}: IProps) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

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
