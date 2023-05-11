import { logoutUser } from 'components/Redux/query';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';

export const Layout = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);
  const isLogin = useSelector(state => state.user.isLogin);

  const routeMatch = useRouteMatch(['/register', '/login']);
  const currentTab = routeMatch?.pattern?.path ?? '/login';

  const logoutFunc = e => {
    dispatch(logoutUser());
  };

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
    return null;
  }

  return (
    <>
      <AppBar position="static">
        {!isLogin && (
          <Tabs value={currentTab}>
            <Tab
              label="REGISTER"
              value="/register"
              to="/register"
              component={NavLink}
            />
            <Tab label="LOGIN" value="/login" to="/login" component={NavLink} />
          </Tabs>
        )}
        {isLogin && (
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <p>Hello {name}</p>
            </Typography>
            <Button variant="contained" onClick={logoutFunc}>
              Logout
            </Button>
          </Toolbar>
        )}
      </AppBar>

      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
{/*       
      <footer>
        <div>FOOTER</div>
      </footer> */}
    </>
  );
};
