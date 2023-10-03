import React, { useContext, useReducer, useEffect } from 'react';
import { cartItemsData } from '../data';
import { reducer } from '../reducers';
import { ICartItem } from '../components';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext({} as IInitialState);

interface IAppContextChildren {
  children: React.ReactNode;
}

interface IInitialState {
  loading: boolean;
  cart: ICartItem[];
  total: number;
  amount: number;
  clearCart?: () => void;
  remove?: (id: number) => void;
  increase?: (id: number) => void;
  decrease?: (id: number) => void;
  toggleAmount?: (id: number, type: string) => void;
}

const initialState: IInitialState = {
  loading: false,
  cart: cartItemsData,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }: IAppContextChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const remove = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id: number) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });

    const response = await fetch(url);
    const cart = await response.json();

    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  const toggleAmount = (id: number, type: string) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
