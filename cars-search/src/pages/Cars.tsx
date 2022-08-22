import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Table } from "../components";
import { CarsWrapper } from "../styledComponents";

const Cars = () => {
  const { fetchAllCars } = useContext(AppContext);

  useEffect(() => {
    fetchAllCars?.();
    // eslint-disable-next-line
  }, []);

  return (
    <CarsWrapper>
      <Table />
    </CarsWrapper>
  );
};

export default Cars;
