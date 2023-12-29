import { IProduct } from '../interfaces';

const product1 = {
  id: '1',
  title: 'Coffee mug 1',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee mug 2',
  img: './coffee-mug2.png',
};

export const products: IProduct[] = [product1, product2];
