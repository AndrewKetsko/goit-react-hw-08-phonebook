import { logoutUser } from 'components/Redux/query';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const Layout = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);
  const isLogin = useSelector(state => state.user.isLogin);

  const logoutFunc = e => {
    dispatch(logoutUser());
  };

  return (
    <>
      <header style={{ display: 'flex' }}>
        <ul style={{ display: 'flex' }}>
          {!isLogin && (
            <>
              <li>
                <NavLink to={'/register'}>REGISTER</NavLink>
              </li>
              <li>
                <NavLink to={'/login'}>LOGIN</NavLink>
              </li>
            </>
          )}
          {/* {isLogin && (
            <li>
              <NavLink to={'/phonebook'}>PHONEBOOK</NavLink>
            </li>
          )} */}
        </ul>
        {isLogin && (
          <div style={{ display: 'flex' }}>
            <p>Hello {name}</p>
            <button onClick={logoutFunc}>Logout</button>
          </div>
        )}
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
