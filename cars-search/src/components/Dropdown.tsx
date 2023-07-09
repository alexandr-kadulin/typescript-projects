import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Select } from "../styledComponents";
import { DropdownProps } from "../types";

const Dropdown = ({ setFilterValue }: DropdownProps) => {
  const { dropdownValue, setDropdownValue } = useContext(AppContext);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue?.(e.target.value);
    setFilterValue("");
  };

  return (
    <Select defaultValue={dropdownValue} onChange={handleSelect}>
      <option value="" disabled>
        Search Field
      </option>
      <option value="make">make</option>
      <option value="vin">vin</option>
      <option value="plate_number">plate number</option>
      <option value="cost">cost</option>
      <option value="photo">photo</option>
    </Select>
  );
};

export default Dropdown;
