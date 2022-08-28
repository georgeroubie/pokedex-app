import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

// Lazy load components
const Settings = lazy(() => import('../pages/settings'));
const NotFound = lazy(() => import('../pages/not-found'));

const Loader = ({ children }) => <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/settings"
      element={
        <Loader>
          <Settings />
        </Loader>
      }
    />
    <Route
      path="*"
      element={
        <Loader>
          <NotFound />
        </Loader>
      }
    />
  </Routes>
);

export default Routing;
