import { ChangeEvent } from 'react';

export interface IAppBarSearchElementProps {
  cartCount: number;
  handleOnChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
