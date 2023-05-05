import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/phonebook" element={<PhonebookPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
