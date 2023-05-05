export const LoginForm = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input name="email" type="text"></input>
      <label htmlFor="password">Password</label>
      <input name="password" type="password"></input>
      <button type="submit">Submit</button>
    </form>
  );
};
