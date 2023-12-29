import { useState } from 'react';
import { IProduct, IProductInCart } from '../interfaces';

interface IProductCountArgs {
  product: IProduct;
  count: number;
}

interface IShoppingCartOutput {
  shoppingCart: {
    [key: string]: IProductInCart;
  };
  onProductCountChange: ({ product, count }: IProductCountArgs) => void;
}

export const useShoppingCart = (): IShoppingCartOutput => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: IProductCountArgs) => {
    setShoppingCart((prevShoppingCart) => {
      const productInCart: IProductInCart = prevShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      const updatedShoppingCartEntry = { ...prevShoppingCart };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...updatedShoppingCartEntry, [product.id]: productInCart };
      }

      delete updatedShoppingCartEntry[product.id];
      return updatedShoppingCartEntry;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
