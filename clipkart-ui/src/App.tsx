import './App.css';
import ClipKartAppBar from './components/common/ClipKartAppBar';
import { SignIn } from './components/user/SignIn';
import ProductsList from './components/products/ProductsList';
import { Alert, Pagination } from '@mui/material';
import ClipKartPaginationBar from './components/common/Pagination';
import { IProduct, IProductListProps } from './types/products/product';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LoginSuccessfulBannerContext } from './context/LoginSuccessfulBannerContext';
import { Login } from '@mui/icons-material';
import { Snackbar } from '@mui/material';
import { CircularProgress } from '@mui/material';

const api = axios.create({ baseURL: import.meta.env.VITE_LOCAL_HOST });

function App() {
  const [products, setProducts] = useState<IProductListProps['products']>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [cartCount, setCartCount] = useState<number>(0);
  const [showLoginSuccessful, setShowLoginSuccessful] =
    useState<boolean>(false);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProducts();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, searchText]);

  async function getProducts() {
    if (searchText === '') {
      await getAllProducts();
    } else {
      await getProductsWithSearchText();
    }
  }

  async function getAllProducts() {
    const response = await api.get(`/products/getProducts/12/${page}`);
    setIsDataLoading(false);
    console.log(response.data.products);
    setProducts(response.data.products);
    setPageCount(Math.floor(Math.ceil(response.data.totalElements / 12)));
  }

  async function getProductsWithSearchText() {
    const response = await api.get(
      `/products/getProducts/${searchText}/12/${page}`
    );
    console.log(response.data.products);
    setProducts(response.data.products);
    setPageCount(
      Math.floor(Math.ceil(response.data.totalSearchMatchingElementsCount / 12))
    );
  }

  function handlePageNumberChange(
    event: React.ChangeEvent<unknown>,
    selectedPage: number
  ) {
    setPage(selectedPage);
  }

  function handleOnnSearchInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(event.target.value);
    setPage(1);
    setSearchText(event.target.value);
  }

  function handleAddToCartButton(product: IProduct) {
    console.log(
      `Clicked on product. Name : ${product.name} & Description : ${product.description}`
    );
    setCartCount(cartCount + 1);
  }
  function handleLoginSuccess(variant: string): undefined {
    console.log(`Show Login Successful Banner. variant is : ${variant}`);
    setShowLoginSuccessful(true);
  }

  return (
    <LoginSuccessfulBannerContext.Provider value={handleLoginSuccess}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <ClipKartAppBar
          cartCount={cartCount}
          handleOnChangeSearchInput={handleOnnSearchInputChange}
        />
        {isDataLoading ? (
          <CircularProgress
            sx={{
              display: 'flex',
              flexGrow: 1,
            }}
          />
        ) : (
          <ProductsList
            products={products}
            onAddToCartButtonClicked={handleAddToCartButton}
          />
        )}
        <Pagination
          sx={{ mt: 1 }}
          page={page}
          count={pageCount}
          onChange={handlePageNumberChange}
        />
        <Snackbar
          open={showLoginSuccessful}
          autoHideDuration={5000}
          onClose={() => setShowLoginSuccessful(false)}
        >
          <Alert
            severity="success"
            onClose={() => setShowLoginSuccessful(false)}
            variant="filled"
            sx={{ width: '100%' }}
          >
            Login Successful !
          </Alert>
        </Snackbar>
      </div>
    </LoginSuccessfulBannerContext.Provider>
  );
}

export default App;
