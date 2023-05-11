import { createUser } from "components/Redux/query";
import { useDispatch } from "react-redux";
import { Button, TextField, Typography } from '@mui/material';
import { Form } from '../LoginForm/Login.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitForm = async e => {
    e.preventDefault();
    const data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(createUser(data));
  };

  return (
    <Form autoComplete="off" onSubmit={submitForm}>
      <Typography>REGISTER</Typography>
      <TextField
        id="standard-basic-1"
        name="email"
        label="Email"
        variant="standard"
      ></TextField>
      <TextField
        id="standard-basic-2"
        name="name"
        label="Name"
        variant="standard"
      ></TextField>
      <TextField
        id="standard-basic-3"
        name="password"
        label="Password"
        variant="standard"
        type="password"
      ></TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
