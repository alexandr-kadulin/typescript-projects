import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../actions";

import { reducer } from "../reducers";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

interface IAppContextChildren {
  children: React.ReactNode;
}

interface IStory {
  objectID: string;
  title: string;
  num_comments: number;
  url: string;
  points: number;
  author: string;
}

export interface IInitialState {
  isLoading: boolean;
  hits: IStory[];
  query: string;
  page: number;
  nbPages: number;
  removeStory?: (id: string) => void;
  handleSearch?: (query: string) => void;
  handlePage?: (page: string) => void;
}

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext({} as IInitialState);

const AppProvider = ({ children }: IAppContextChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url: string) => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id: string) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  const handleSearch = (query: string) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = (page: string) => {
    dispatch({ type: HANDLE_PAGE, payload: page });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
