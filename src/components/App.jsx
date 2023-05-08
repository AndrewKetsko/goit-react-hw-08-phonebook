import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './Redux/query';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.user.isRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLoggedin = useSelector(state => state.user.isLogin);
  const isRefrshin = useSelector(state => state.user.isRefreshing);
  // const token = useSelector(state => state.user.token);

  const PrivatRoot = ({ component, redirectPath }) => {
    return !isLoggedin && !isRefrshin ? (
      <Navigate to={redirectPath} />
    ) : (
      component
    );
  };

  const RestRoot = ({ component, redirectPath }) => {
    return isLoggedin ? <Navigate to={redirectPath} /> : component;
  };

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            // index
            path="/login"
            element={
              <RestRoot redirectPath="/phonebook" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestRoot
                redirectPath="/phonebook"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/phonebook"
            element={
              <PrivatRoot redirectPath="/login" component={<PhonebookPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
};
