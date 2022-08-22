export type User = {
  name: string;
  email: string;
  password: string;
  isMember?: boolean;
};

export type Car = {
  id: string;
  make: string;
  vin: string;
  plate_number: string;
  cost: string;
  photo: string;
};

export type Token = string | null;

export type InitialState = {
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
  isCars: string;
  editItem: Car;
  token: Token;
  user: User | null;
  tableItems: Car[];
  preservedItems: Car[];
  closeModal?: () => void;
  hideLogout?: () => void;
  fetchAllCars?: () => void;
  loginUser?: (user: User, token: Token) => void;
  registerUser?: (user: User) => void;
  displayAlert?: (msg?: string) => void;
  sortItems?: (sortField: string) => void;
  filterItems?: (filterValue: string) => void;
  setEditItem?: (id?: string) => void;
  removeItem?: (id: string) => void;
  setDropdownValue?: (value: string) => void;
  replaceItem?: (itemToReplace: Car) => void;
  addItem?: (itemToAdd: Car) => void;
};
