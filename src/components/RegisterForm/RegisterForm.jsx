import { createUser } from "components/Redux/query";
import { useDispatch } from "react-redux";

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
    <form autoComplete="off" onSubmit={submitForm}>
      <label htmlFor="email">Email</label>
      <input name="email" type="text"></input>
      <label htmlFor="name">Name</label>
      <input name="name" type="text"></input>
      <label htmlFor="password">Password</label>
      <input name="password" type="password"></input>
      <button type="submit">Submit</button>
    </form>
  );
};
