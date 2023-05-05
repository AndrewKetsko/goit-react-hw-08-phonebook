export const RegisterForm = () => {
  return (
    <form autoComplete="off">
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
