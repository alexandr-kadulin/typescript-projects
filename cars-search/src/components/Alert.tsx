import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { AlertWrapper } from "../styledComponents";

const Alert = () => {
  const { alertType, alertText } = useContext(AppContext);

  return <AlertWrapper alertType={alertType}>{alertText}</AlertWrapper>;
};

export default Alert;
