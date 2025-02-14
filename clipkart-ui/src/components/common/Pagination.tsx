import { Pagination } from '@mui/material';

export interface pageProps {
  page: number;
  count: number;
  onChange: () => React.ChangeEvent<unknown>;
}

function ClipKartPaginationBar({ page, count, onChange }: pageProps) {
  return (
    <>
      <Pagination onChange={onChange} count={count} page={page}></Pagination>
    </>
  );
}

export default ClipKartPaginationBar;
