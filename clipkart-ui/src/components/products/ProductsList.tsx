import Product from './Product';
import { Box } from '@mui/material';
import { IProductListProps } from '../../types/products/product';

function ProductsList(products: IProductListProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 3,
        }}
      >
        {products.product.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </Box>
    </>
  );
}

export default ProductsList;
