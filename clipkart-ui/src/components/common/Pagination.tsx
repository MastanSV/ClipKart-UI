import { Pagination } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_LOCAL_HOST });

function ClipKartPaginationBar() {
  const [count, setCount] = useState<number>(16);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/products/getproducts/${count}/${pageNumber}`
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
