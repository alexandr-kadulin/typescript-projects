import { MdDelete, MdEditNote } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { ButtonsContainer, RowButton } from "../styledComponents";
import { RowProps } from "../types";

const Row = ({ item }: RowProps) => {
  const { setEditItem, removeItem } = useContext(AppContext);

  const { id } = item;

  const getValues = () => {
    const values = Object.values(item);

    return values.map((value, index) => {
      return index !== 0 && <td key={`${index} + ${value}`}>{value}</td>;
    });
  };

  return (
    <tr>
      {getValues()}
      <td>
        <ButtonsContainer row>
          <RowButton
            type="button"
            onClick={() => {
              setEditItem?.(id);
            }}
          >
            <MdEditNote />
          </RowButton>
          <RowButton type="button" danger onClick={() => removeItem?.(id)}>
            <MdDelete />
          </RowButton>
        </ButtonsContainer>
      </td>
    </tr>
  );
};

export default Row;
