import reactLogo from '../assets/react.svg';

import {
  DynamicForm,
  FormikAbstract,
  FormikComponents,
  FormikPage,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../03-forms/pages';

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="formik-basic" element={<FormikPage />}></Route>
          <Route path="formik-yup" element={<FormikYupPage />}></Route>
          <Route
            path="formik-components"
            element={<FormikComponents />}
          ></Route>
          <Route path="formik-abstract" element={<FormikAbstract />}></Route>
          <Route
            path="formik-register"
            element={<RegisterFormikPage />}
          ></Route>
          <Route path="dynamic-form" element={<DynamicForm />}></Route>

          <Route
            path="/*"
            element={<Navigate to="/register" replace />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
