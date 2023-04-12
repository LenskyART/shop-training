import { createContext } from 'react';

interface IHomeContext {
  examAddedCart?: (id: string) => boolean;
  examAddedFavor?: (id: string) => boolean;
}

export const homeContext = createContext<IHomeContext>({});
