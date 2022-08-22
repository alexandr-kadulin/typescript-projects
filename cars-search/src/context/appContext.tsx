import { createContext } from "react";
// import reducer from "./reducer";
// import axios from "axios";
// import _ from "lodash";

// import {
//   DISPLAY_ALERT,
//   CLEAR_ALERT,
//   REGISTER_USER,
//   LOGIN_USER,
//   SORT_ITEMS,
//   FILTER_ITEMS,
//   SET_EDIT_ITEM,
//   CLOSE_MODAL,
//   REMOVE_ITEM,
//   SET_DROPDOWN_VALUE,
//   REPLACE_ITEM,
//   ADD_ITEM,
//   FETCH_SUCCESS,
//   FETCH_ERROR,
//   FETCH_PENDING,
//   SET_IS_CARS,
// } from "./actions";

// const user = localStorage.getItem("user");
// const token = localStorage.getItem("token");
// const isCars = localStorage.getItem("isCars");

type EditItem = {
  id: string;
  make: string;
  vin: string;
  plate_number: string;
  cost: string;
  photo: string;
};

type InitialState = {
  alertText: string;
  alertType: string;
  dropdownValue: string;
  sortType: string;
  sortField: string;
  error: string;
  isEdit: boolean;
  isOpen: boolean;
  isLoading: boolean;
  showAlert: boolean;
  isCars: boolean;
  editItem: EditItem;
  token: null;
  user: null;
};

const initialState: InitialState = {
  alertText: "",
  alertType: "",
  dropdownValue: "",
  sortType: "",
  sortField: "",
  error: "",
  isEdit: false,
  isOpen: false,
  isLoading: false,
  showAlert: false,
  isCars: false, // local storage!
  token: null, // local storage!
  user: null, // local storage!
  // isCars: isCars || false,
  // token: token || null,
  // user: user ? JSON.parse(user) : null,

  // tableItems: [],
  // preservedItems: [],
  editItem: {
    id: "",
    make: "",
    vin: "",
    plate_number: "",
    cost: "",
    photo: "",
  },
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

// const useAppContext = () => {
//   return useContext(AppContext);
// };

export { AppContextProvider, AppContext };
