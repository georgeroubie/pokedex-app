import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

// Lazy load components
const Settings = lazy(() => import('../pages/settings'));
const NotFound = lazy(() => import('../pages/not-found'));
const MiniGames = lazy(() => import('../pages/mini-games'));
const CompleteDonation = lazy(() => import('../pages/donation/Complete'));
const CancelDonation = lazy(() => import('../pages/donation/Cancel'));

const Loader = ({ children }) => <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/mini-games"
      element={
        <Loader>
          <MiniGames />
        </Loader>
      }
    />
    <Route
      path="/settings"
      element={
        <Loader>
          <Settings />
        </Loader>
      }
    />
    <Route
      path="/complete-donation"
      element={
        <Loader>
          <CompleteDonation />
        </Loader>
      }
    />
    <Route
      path="/cancel-donation"
      element={
        <Loader>
          <CancelDonation />
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
