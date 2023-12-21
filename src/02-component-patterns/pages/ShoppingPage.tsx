import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';

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
        <ProductCard product={product}>
          <ProductImage img="coffee-mug.png" />
          <ProductTitle title="Coffee mug 1" />
          <ProductButtons />
        </ProductCard>

        {/* Option 2 */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
