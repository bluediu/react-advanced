import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import { IStylesProps } from '../interfaces';

export interface IProps extends IStylesProps {
  title?: string;
}

export const ProductTitle = ({ title, className, style }: IProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
