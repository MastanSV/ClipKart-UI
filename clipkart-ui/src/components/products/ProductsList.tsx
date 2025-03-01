import Product from './Product';
import { Box } from '@mui/material';
import { IProductListProps } from '../../types/products/product';

function ProductsList({
  products,
  onAddToCartButtonClicked,
}: IProductListProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 5,
          alignItems: 'stretch',
        }}
      >
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            onAddToCartButtonClicked={() => onAddToCartButtonClicked(product)}
          />
        ))}
      </Box>
    </>
  );
}

export default ProductsList;
