import React from "react";
// import { useAppContext } from "../context/appContext";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { Controls, Loading, Row, Modal } from ".";
import { TableHeader, TableWrapper } from "../styledComponents";

type Item = {
  id: string;
  make: string;
  vin: string;
  plate_number: string;
  cost: string;
  photo: string;
};

const tableItems: Item[] = [
  {
    id: "70efcddd-fb7c-48f9-82c5-3a37ce797466",
    make: "Cadillac",
    vin: "5UXWX5C57BL080214",
    plate_number: "VIM 5145",
    cost: "$58064.43",
    photo: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  },
  {
    id: "b35782ab-5258-4af5-b4df-f51e292a063b",
    make: "Audi",
    vin: "WBAEN33425P715087",
    plate_number: "KAR 8170",
    cost: "$21261.68",
    photo: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: "dfa43581-62fa-4be9-8cff-87622d30d267",
    make: "Land Rover",
    vin: "WVGAV7AX3FW171207",
    plate_number: "APE 5432",
    cost: "$52566.90",
    photo: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
];

const Table = () => {
  // const {
  //   tableItems,
  //   sortType,
  //   sortField,
  //   sortItems,
  //   isLoading,
  //   isOpen,
  //   error,
  // } = useAppContext();

  const getKeys = () => {
    const keys = Object.keys(tableItems[0]).filter((key) => key !== "id");
    // const keys = Object.keys(item).filter((key) => key !== "id");

    let sortType = "";
    let sortField = "";

    return keys.map((key, index) => {
      return (
        <th
          key={`${index} + ${key}`}
          //  onClick={() => sortItems(key)}
        >
          <TableHeader>
            {key}
            {renderIcons(sortField, key, sortType)}
          </TableHeader>
        </th>
      );
    });
  };

  const renderIcons = (sortField: string, key: string, sortType: string) => {
    return (
      <>
        {sortField === key ? (
          <>{sortType === "desc" ? <FaSortUp /> : <FaSortDown />}</>
        ) : (
          <FaSort />
        )}
      </>
    );
  };

  let isOpen: boolean = false;
  let isLoading: boolean = false;

  return (
    <>
      {isOpen && <Modal />}
      {isLoading ? (
        <Loading />
      ) : (
        <TableWrapper>
          <Controls />
          {tableItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  {getKeys()}
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {tableItems.map((item) => {
                  return <Row item={item} key={item.id} />;
                })}
              </tbody>
            </table>
          ) : (
            <>
              <h2>Sorry, no values matched your search...</h2>
              {/* {error && <h2>{error}</h2>} */}
            </>
          )}
        </TableWrapper>
      )}
    </>
  );
};

export default Table;
