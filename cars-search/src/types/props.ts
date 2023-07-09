import { Car } from "./store";

export type DropdownProps = {
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

export type FormRowProps = {
  type: string;
  name: string;
  value: string;
  labelText?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RowProps = {
  item: Car;
};

export type ProtectedRouteProps = {
  children: JSX.Element;
};
