import { Pagination } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_LOCAL_HOST });

function ClipKartPaginationBar({ pageNumber: number }) {
  const [count, setCount] = useState<number>(16);

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/products/getproducts/${count}/${page}`
        );

        console.log(`response : ${response.data.products}`);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  return (
    <>
      <Pagination
        onChange={handlePageChange}
        count={count}
        page={pageNumber}
      ></Pagination>
    </>
  );
}

export default ClipKartPaginationBar;
