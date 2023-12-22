import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { IStylesProps } from '../interfaces';

export interface IProps extends IStylesProps {
  img?: string;
}

export const ProductImage = ({ img = '', className, style }: IProps) => {
  const { product } = useContext(ProductContext);
  const imgToShow: string = img || product.img || noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product Img"
    />
  );
};
