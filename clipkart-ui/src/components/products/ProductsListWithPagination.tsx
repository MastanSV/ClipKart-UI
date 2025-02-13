import ClipKartPaginationBar from '../common/Pagination';
import ProductsList from './ProductsList';
import { useState } from 'react';

function ProductsListWithPagination() {
  const [pageNumber, setPageNumber] = useState<number>();
  return (
    <>
      <ProductsList />
      <ClipKartPaginationBar pageNumber={pageNumber} />
    </>
  );
}

export default ProductsListWithPagination;
