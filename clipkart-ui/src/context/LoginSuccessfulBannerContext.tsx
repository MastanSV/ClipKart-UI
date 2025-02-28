import { createContext } from 'react';

export const LoginSuccessfulBannerContext = createContext(
  (variant: string) => undefined
);
