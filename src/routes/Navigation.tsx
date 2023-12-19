import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import reactLogo from '../assets/react.svg';

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
                to="/lazy1"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyPage1 />}></Route>
          <Route path="lazy2" element={<LazyPage2 />}></Route>
          <Route path="lazy3" element={<LazyPage3 />}></Route>

          <Route path="/*" element={<Navigate to="/lazy1" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;