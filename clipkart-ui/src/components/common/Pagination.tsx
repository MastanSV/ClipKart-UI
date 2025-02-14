import { Pagination } from '@mui/material';

export interface pageProps {
  page: number;
  count: number;
  setPage: (page: number) => void;
}

function ClipKartPaginationBar({ page, count, setPage }: pageProps) {
  return (
    <>
      <Pagination
        onChange={() => setPage(page)}
        count={count}
        page={page}
      ></Pagination>
    </>
  );
}

export default ClipKartPaginationBar;
