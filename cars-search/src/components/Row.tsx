import { MdDelete, MdEditNote } from "react-icons/md";
import { ButtonsContainer, RowButton } from "../styledComponents";

type Item = {
  id: string;
  make: string;
  vin: string;
  plate_number: string;
  cost: string;
  photo: string;
};

const tempItem: Item = {
  id: "70efcddd-fb7c-48f9-82c5-3a37ce797466",
  make: "Cadillac",
  vin: "5UXWX5C57BL080214",
  plate_number: "VIM 5145",
  cost: "$58064.43",
  photo: "http://dummyimage.com/100x100.png/ff4444/ffffff",
};

type RowProps = {
  item: Item;
};

const Row = ({ item }: RowProps) => {
  // const { setEditItem, removeItem } = useAppContext();

  const { id } = item;

  const getValues = () => {
    const values = Object.values(tempItem);

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
            // onClick={() => {
            //   setEditItem(id);
            // }}
            onClick={() => {
              console.log(`set edit item with id : ${id}`);
            }}
          >
            <MdEditNote />
          </RowButton>
          <RowButton
            type="button"
            danger
            // onClick={() => removeItem(id)}
            onClick={() => {
              console.log(`remove item with id : ${id}`);
            }}
          >
            <MdDelete />
          </RowButton>
        </ButtonsContainer>
      </td>
    </tr>
  );
};

export default Row;
