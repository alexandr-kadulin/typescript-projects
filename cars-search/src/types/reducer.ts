import { Car, Token, User } from "./store";

type DisplayAlert = {
  type: "DISPLAY_ALERT";
  payload: string | undefined;
};

type ClearAlert = {
  type: "CLEAR_ALERT";
};

type RegisterUser = {
  type: "REGISTER_USER";
  payload: {
    user: User;
    token: string;
  };
};

type LoginUser = {
  type: "LOGIN_USER";
  payload: {
    user: User;
    token: Token;
  };
};

type SortItems = {
  type: "SORT_ITEMS";
  payload: {
    tempItems: Car[];
    sortType: string;
    sortField: string;
  };
};

type FilterItems = {
  type: "FILTER_ITEMS";
  payload: Car[];
};

type SetEditItem = {
  type: "SET_EDIT_ITEM";
  payload: {
    itemToEdit: Car | undefined;
    shouldEdit: boolean;
  };
};

type CloseModal = {
  type: "CLOSE_MODAL";
};

type RemoveItem = {
  type: "REMOVE_ITEM";
  payload: Car[];
};

type SetDropdownValue = {
  type: "SET_DROPDOWN_VALUE";
  payload: string;
};

type ReplaceItem = {
  type: "REPLACE_ITEM";
  payload: Car[];
};

type AddItem = {
  type: "ADD_ITEM";
  payload: Car[];
};

type FetchSuccess = {
  type: "FETCH_SUCCESS";
  payload: Car[];
};

type FetchError = {
  type: "FETCH_ERROR";
  payload: string;
};

type FetchPending = {
  type: "FETCH_PENDING";
};

type HideLogout = {
  type: "SET_IS_CARS";
};

export type Action =
  | DisplayAlert
  | ClearAlert
  | RegisterUser
  | LoginUser
  | SortItems
  | FilterItems
  | SetEditItem
  | CloseModal
  | RemoveItem
  | SetDropdownValue
  | ReplaceItem
  | AddItem
  | FetchSuccess
  | FetchError
  | FetchPending
  | HideLogout;
