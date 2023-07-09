import { createContext, useState } from "react";
import { Car, InitialState, Token, User } from "../types";
// import reducer from "./reducer";
import axios from "axios";
import _ from "lodash";

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

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const isCars = localStorage.getItem("isCars");

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
  user: user ? JSON.parse(user) : null,
  token: token || null,
  isCars: isCars || "",
  tableItems: [],
  preservedItems: [],
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
  const [state, setState] = useState<InitialState>(initialState);

  const fetchAllCars = () => {
    // dispatch({ type: FETCH_PENDING });
    setState({
      ...state,
      isLoading: true,
    });
    axios
      .get("http://localhost:8999/cars")
      .then((response) => {
        // dispatch({ type: FETCH_SUCCESS, payload: response.data });
        setState({
          ...state,
          isLoading: false,
          tableItems: response.data,
          preservedItems: response.data,
          error: "",
        });
      })
      .catch((error) => {
        // dispatch({ type: FETCH_ERROR, payload: error.message });
        setState({
          ...state,
          isLoading: false,
          tableItems: [],
          preservedItems: [],
          error: error.message || "Something went wrong",
        });
      });
  };

  const displayAlert = (msg?: string) => {
    // dispatch({ type: DISPLAY_ALERT, payload: msg });
    setState({
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: msg || "Please provide all values",
    });

    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      // dispatch({ type: CLEAR_ALERT });
      setState({
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      });
    }, 2500);
  };

  const addUserToLocalStorage = (user: User, token: Token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token as string);
    localStorage.setItem("isCars", "true");
  };

  const registerUser = (user: User) => {
    const token: string = "mockToken";

    // dispatch({
    //   type: REGISTER_USER,
    //   payload: { user, token },
    // });
    setState({
      ...state,
      isLoading: false,
      token: token,
      user: user,
      showAlert: true,
      isCars: "true",
      alertType: "success",
      alertText: "User created. Redirecting...",
    });

    addUserToLocalStorage(user, token);

    clearAlert();
  };

  const loginUser = (user: User, token: Token) => {
    // dispatch({
    //   type: LOGIN_USER,
    //   payload: { user, token },
    // });
    setState({
      ...state,
      isLoading: false,
      token: token,
      user: user,
      showAlert: true,
      isCars: "true",
      alertType: "success",
      alertText: "Login successful. Redirecting...",
    });

    addUserToLocalStorage(user, token);

    clearAlert();
  };

  const sortItems = (sortField: string) => {
    let tempItems = [...state.tableItems];
    let sortType: string = "desc";

    if (!state.sortType) {
      tempItems = _.orderBy(state.tableItems, sortField, "desc");
    }
    if (state.sortType === "desc") {
      tempItems = _.orderBy(state.tableItems, sortField, "asc");
      sortType = "asc";
    }
    if (state.sortType === "asc") {
      tempItems = _.orderBy(state.tableItems, sortField, "desc");
      sortType = "desc";
    }

    // dispatch({
    //   type: SORT_ITEMS,
    //   payload: { tempItems, sortType, sortField },
    // });
    setState({
      ...state,
      tableItems: tempItems,
      sortType: sortType,
      sortField: sortField,
    });
  };

  const filterItems = (filterValue: string) => {
    let tempItems = [...state.preservedItems];
    const value = state.dropdownValue;

    if (filterValue && value) {
      filterValue = filterValue.toLowerCase();

      tempItems = tempItems.filter((item) =>
        item[value as keyof Car].toLowerCase().startsWith(filterValue)
      );
    }

    // dispatch({
    //   type: FILTER_ITEMS,
    //   payload: tempItems,
    // });
    setState({
      ...state,
      tableItems: tempItems,
    });
  };

  const setEditItem = (id?: string) => {
    let itemToEdit: Car | undefined = {
      id: "",
      make: "",
      vin: "",
      plate_number: "",
      cost: "",
      photo: "",
    };

    let shouldEdit: boolean = true;

    if (id) {
      itemToEdit = state.tableItems.find((item) => item.id === id);
    } else {
      itemToEdit = {
        id: "",
        make: "",
        vin: "",
        plate_number: "",
        cost: "",
        photo: "",
      };

      shouldEdit = false;
    }

    // dispatch({
    //   type: SET_EDIT_ITEM,
    //   payload: { itemToEdit, shouldEdit },
    // });
    setState({
      ...state,
      editItem: itemToEdit!,
      isEdit: shouldEdit,
      isOpen: true,
    });
  };

  const closeModal = () => {
    // dispatch({ type: CLOSE_MODAL });
    setState({
      ...state,
      isOpen: false,
    });
  };

  const removeItem = (id: string) => {
    const filteredItems = state.tableItems.filter((item) => item.id !== id);

    // dispatch({
    //   type: REMOVE_ITEM,
    //   payload: filteredItems,
    // });
    setState({
      ...state,
      tableItems: filteredItems,
    });
  };

  const setDropdownValue = (value: string) => {
    // dispatch({
    //   type: SET_DROPDOWN_VALUE,
    //   payload: value,
    // });
    setState({
      ...state,
      dropdownValue: value,
    });
  };

  const replaceItem = (itemToReplace: Car) => {
    const tempItems = [...state.tableItems];
    const index = state.tableItems.findIndex(
      (item) => item.id === state.editItem.id
    );

    tempItems[index] = itemToReplace;

    // dispatch({
    //   type: REPLACE_ITEM,
    //   payload: tempItems,
    // });
    setState({
      ...state,
      tableItems: tempItems,
    });
  };

  const addItem = (itemToAdd: Car) => {
    const tempItems = [...state.tableItems];
    const newItem = {
      ...itemToAdd,
      id: new Date().getTime().toString(),
    };

    tempItems.unshift(newItem);

    // dispatch({
    //   type: ADD_ITEM,
    //   payload: tempItems,
    // });
    setState({
      ...state,
      tableItems: tempItems,
    });
  };

  const hideLogout = () => {
    // dispatch({ type: SET_IS_CARS });
    setState({
      ...state,
      isCars: "",
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        closeModal,
        hideLogout,
        loginUser,
        registerUser,
        displayAlert,
        fetchAllCars,
        sortItems,
        filterItems,
        setEditItem,
        removeItem,
        setDropdownValue,
        replaceItem,
        addItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// const useAppContext = () => {
//   return useContext(AppContext);
// };

export { AppContextProvider, AppContext };
