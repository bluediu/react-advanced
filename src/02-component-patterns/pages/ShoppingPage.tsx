import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee mug 2',
  img: './coffee-mug.png',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* Option 1 */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage img="coffee-mug.png" className="custom-image" />
          <ProductTitle title="Coffee mug 1" className="fw-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* Option 2 */}
        <ProductCard product={product} className="bg-gray">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="fw-bold" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Option 3 */}
        <ProductCard
          product={product}
          style={{ backgroundColor: 'rebeccapurple' }}
        >
          <ProductImage img="coffee-mug.png" style={{ borderRadius: '10px' }} />
          <ProductTitle
            title="Coffee mug 1"
            style={{ color: 'greenyellow', fontWeight: 'bold' }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end',
              color: 'greenyellow',
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
