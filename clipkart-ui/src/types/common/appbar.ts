import { ChangeEvent } from 'react';

export interface IAppBarSearchElementProps {
  handleOnChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
