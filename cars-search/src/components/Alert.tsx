// import { useAppContext } from "../context/appContext";
import { AlertWrapper } from "../styledComponents";

const Alert = () => {
  // const { alertType, alertText } = useAppContext();
  const alertType: string = "danger";
  const alertText: string = "alert text";

  return <AlertWrapper alertType={alertType}>{alertText}</AlertWrapper>;
};

export default Alert;
