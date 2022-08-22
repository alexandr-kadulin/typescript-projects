import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

type DropdownProps = {
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

const Dropdown = ({ setFilterValue }: DropdownProps) => {
  // const { dropdownValue, preservedItems - don't need?, setDropdownValue } = useAppContext();
  const { dropdownValue } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState<String>();

  // const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setDropdownValue(e.target.value);
  //   console.log(e.target.value);
  //   setFilterValue("");
  // };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setFilterValue("");
    console.log(selectedOption);
  };

  return (
    // <Select value={dropdownValue} onChange={handleSelect} displayEmpty>
    //   <MenuItem value="" disabled>
    //     Search Field
    //   </MenuItem>
    //   {preservedItems[0]
    //     ? Object.keys(preservedItems[0])
    //         .filter((key) => key !== "id")
    //         .map((key, index) => {
    //           return (
    //             <MenuItem value={key} key={`${index} + ${key}`}>
    //               {key}
    //             </MenuItem>
    //           );
    //         })
    //     : null}
    // </Select>
    <select defaultValue={dropdownValue} onChange={handleSelect}>
      <option value="" disabled>
        Search Field
      </option>
      <option value="make">make</option>
      <option value="vin">vin</option>
      <option value="plate_number">plate number</option>
      <option value="cost">cost</option>
      <option value="photo">photo</option>
    </select>
  );
};

export default Dropdown;
