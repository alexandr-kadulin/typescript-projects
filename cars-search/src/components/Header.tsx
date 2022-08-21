// import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Button, SharedLayoutWrapper } from "../styledComponents";

type User = {
  name: string;
  email: string;
  password: string;
};

const Header = () => {
  const navigate = useNavigate();

  // const { user, isCars } = useAppContext();
  const user: User | null = {
    name: "user name",
    email: "user email",
    password: "user password",
  };

  const isCars: boolean = false;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <SharedLayoutWrapper>
      <h2>
        welcome <span>{user && isCars ? user.name : "guest"}</span>
      </h2>
      {user && isCars && <Button onClick={handleLogout}>logout</Button>}
    </SharedLayoutWrapper>
  );
};

export default Header;
