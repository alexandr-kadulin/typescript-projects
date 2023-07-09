import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { MdCreateNewFolder } from "react-icons/md";
import { RiFileSearchFill, RiCheckboxFill } from "react-icons/ri";
import { Dropdown } from ".";
import {
  Button,
  ControlsWrapper,
  ControlsForm,
  Input,
} from "../styledComponents";

const Controls = () => {
  const { dropdownValue, filterItems, setEditItem } = useContext(AppContext);

  const [filterValue, setFilterValue] = useState<string>("");

  useEffect(() => {
    filterItems?.(filterValue);
    // eslint-disable-next-line
  }, [filterValue]);

  return (
    <ControlsWrapper>
      <ControlsForm onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {dropdownValue ? (
          <RiCheckboxFill size={65} color="#75c9fa" />
        ) : (
          <RiFileSearchFill size={65} color="#75c9fa" />
        )}
        <Dropdown setFilterValue={setFilterValue} />
      </ControlsForm>
      <Button
        type="button"
        onClick={() => {
          setEditItem?.();
        }}
      >
        <MdCreateNewFolder size={30} />
      </Button>
    </ControlsWrapper>
  );
};

export default Controls;
