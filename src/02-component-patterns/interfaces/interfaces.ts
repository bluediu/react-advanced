import { CSSProperties } from 'react';

import { IProps as IProductCardProps } from '../components/ProductCard';
import { IProps as IProductImageProps } from '../components/ProductImage';
import { IProps as IProductTitleProps } from '../components/ProductTitle';

// Global
export interface IStylesProps {
  className?: string;
  style?: CSSProperties;
}

// Custom
export interface IProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
  maxCount?: number;
}

export interface IProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element;
  Title: (Props: IProductTitleProps) => JSX.Element;
  Image: (Props: IProductImageProps) => JSX.Element;
  Buttons: (Props: IStylesProps) => JSX.Element;
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IOnChangeArgs {
  product: IProduct;
  count: number;
}

export interface IProductInCart extends IProduct {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
  reset: () => void;
}
