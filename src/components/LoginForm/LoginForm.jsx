import { loginUser } from "components/Redux/query";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { Form } from "./Login.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const loginForm = async e => {
    e.preventDefault();
    const data = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginUser(data));
    };
    
  return (
    <Form autoComplete="off" onSubmit={loginForm}>
      <TextField
        id="standard-basic-1"
        name="email"
        label="Email"
        variant="standard"
      >
      </TextField>
      <TextField
        id="standard-basic-2"
        name="password"
        label="Password"
        variant="standard"
        type="password"
      >
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
