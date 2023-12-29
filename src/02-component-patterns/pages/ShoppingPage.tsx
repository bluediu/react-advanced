import { ProductCard } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/product';

import '../styles/custom-styles.css';

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <section
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            value={shoppingCart[product.id]?.count ?? 0}
            onChange={onProductCountChange}
            className="bg-dark"
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white fw-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </section>

      <section className="shopping-cart">
        {Object.values(shoppingCart).map((productInCart) => (
          <ProductCard
            product={productInCart}
            key={productInCart.id}
            value={productInCart.count}
            onChange={onProductCountChange}
            className="bg-dark"
            style={{ width: '100px' }}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </section>
    </div>
  );
};

export default ShoppingPage;
