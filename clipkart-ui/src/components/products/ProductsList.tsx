import Product from './Product';
import { Box } from '@mui/material';
import { IProductsList } from '../../types/products/product';

function ProductsList({ productsData }: IProductsList) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 4,
        }}
      >
        {productsData.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </Box>
    </>
  );
}

export default ProductsList;
