import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header style={{ display: 'flex' }}>
        <ul style={{ display: 'flex' }}>
          <li>
            <NavLink to={'/register'}>REGISTER</NavLink>
          </li>
          <li>
            <NavLink to={'/login'}>LOGIN</NavLink>
          </li>
        </ul>
        <div style={{ display: 'flex' }}>
          <p>Hello user</p>
          <button>Logout</button>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div>FOOTER</div>
      </footer>
    </>
  );
};
