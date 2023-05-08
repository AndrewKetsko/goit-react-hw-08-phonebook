import { loginUser } from "components/Redux/query";
import { useDispatch } from "react-redux";

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
    <form autoComplete="off" onSubmit={loginForm}>
      <label htmlFor="email">Email</label>
      <input name="email" type="text"></input>
      <label htmlFor="password">Password</label>
      <input name="password" type="password"></input>
      <button type="submit">Submit</button>
    </form>
  );
};
