import { Suspense } from 'react';
import reactLogo from '../assets/react.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import { routes } from './routes';

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading....</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />}></Route>
            ))}

            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
