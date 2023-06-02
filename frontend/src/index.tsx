import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Tasks from "./components/tasks/Tasks";
import PageNotFound from "./components/error/PageNotFound";
import Registration from "./components/registration/Registration";
import RegistrationForm from "./components/registration/RegistrationForm";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter basename={'/'}>
          <Routes>
              <Route path='/auth' element={<Auth />}>
                  <Route path='login' element={<Login />} />
              </Route>
              <Route path='/registration' element={<Registration />}>
                  <Route path='' element={<RegistrationForm />} />
              </Route>
              <Route path="/" element={<App />}>
                  <Route path='' element={
                      <ProtectedRoute>
                          <Tasks />
                      </ProtectedRoute>
                  } />
              </Route>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
