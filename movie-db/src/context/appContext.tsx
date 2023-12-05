import React, { useState, useContext } from 'react';
import { useFetch } from '../utils';

interface IAppContextChildren {
  children: React.ReactNode;
}

interface IInitialState {
  isLoading: boolean;
  error: {
    show: boolean;
    msg: string;
  };
  movies: IMovie[] | null;
  query: string;
  setQuery?: (query: string) => void;
}

export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Plot: string;
}

const AppContext = React.createContext({} as IInitialState);

const AppProvider = ({ children }: IAppContextChildren) => {
  const [query, setQuery] = useState('star trek');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
