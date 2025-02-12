import Product from './Product';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCardProps } from '../../types/products/product';

const api = axios.create({ baseURL: import.meta.env.VITE_LOCAL_HOST });

function ProductsList() {
  const [productsData, setProductsData] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get('products/getproducts');
        console.log(response.data.products);
        setProductsData(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

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
