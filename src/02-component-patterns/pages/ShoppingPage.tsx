import { ProductCard } from '../components';
import { products } from '../data/product';

import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        product={product}
        key={product.id}
        className="bg-dark"
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title className="text-white fw-bold" />
            <ProductCard.Buttons className="custom-buttons" />
            <div
              style={{
                marginLeft: '0.6rem',
              }}
            >
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
