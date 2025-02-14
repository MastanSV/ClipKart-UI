import './App.css';
import ClipKartAppBar from './components/common/ClipKartAppBar';
import SignIn from './components/user/SignIn';
import Product from './components/products/Product';
import ProductsList from './components/products/ProductsList';
import { Pagination } from '@mui/material';
import ClipKartPaginationBar from './components/common/Pagination';
import { IProductCardProps } from './types/products/product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_LOCAL_HOST });

function App() {
  const [products, setProducts] = useState<IProductCardProps[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/products/getProducts/12/${page}`);
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        boxSizing: 'border-box',
        alignItems: 'center',
      }}
    >
      <ClipKartAppBar />
      <ProductsList productsData={products} />
      <Pagination page={page} count={10} setPage={setPage} />
    </div>
  );
}

export default App;
