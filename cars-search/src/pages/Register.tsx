import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { FormRow, Alert } from "../components";
import {
  Form,
  MemberButton,
  RegisterWrapper,
  SubmitButton,
} from "../styledComponents";

type InitialState = {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
};

const initialState: InitialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

type User = {
  name: string;
  email: string;
  password: string;
};

const user: User = {
  name: "user name",
  email: "user email",
  password: "user password",
};

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<InitialState>(initialState);

  const {
    // user,
    token,
    isLoading,
    // displayAlert,
    showAlert,
    // registerUser,
    // loginUser,
    // hideLogout,
  } = useContext(AppContext);

  // useEffect(() => {
  //   hideLogout();
  //   eslint-disable-next-line
  // }, []);

  const toggleMember = () => {
    setValues({ ...initialState, isMember: !values.isMember });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      // displayAlert();
      console.log("display alert");
      return;
    }

    const currentUser: User = { name, email, password };

    if (isMember) {
      if (!user || !token) {
        // displayAlert("No such user");
        console.log("No such user");
        return;
      }
      if (user.email !== email || user.password !== password) {
        // displayAlert("Invalid credentials");
        console.log("Invalid credentials");
      } else {
        // loginUser(user, token);
        console.log(user, token);

        setTimeout(() => {
          navigate("/cars");
        }, 2500);
      }
    } else {
      // registerUser(currentUser);
      console.log(currentUser);

      setTimeout(() => {
        navigate("/cars");
      }, 2500);
    }
  };

  return (
    <RegisterWrapper>
      <Form register onSubmit={handleSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <SubmitButton type="submit" register disabled={isLoading}>
          submit
        </SubmitButton>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <MemberButton type="button" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </MemberButton>
        </p>
      </Form>
    </RegisterWrapper>
  );
};

export default Register;
