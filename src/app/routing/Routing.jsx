import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from '../components/layout/PageLoader';
import Home from '../pages/home';

// Lazy load components
const Settings = lazy(() => import('../pages/settings'));
const NotFound = lazy(() => import('../pages/not-found'));
const MiniGames = lazy(() => import('../pages/mini-games'));
const FindPokemonName = lazy(() => import('../pages/mini-games/find-pokemon-name'));
const FindPokemonNameGame = lazy(() => import('../pages/mini-games/find-pokemon-name/game'));

const Loader = ({ children }) => <Suspense fallback={<PageLoader />}>{children}</Suspense>;

const Routing = () => {
  return (
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
        path="/mini-games/find-pokemon-name"
        element={
          <Loader>
            <FindPokemonName />
          </Loader>
        }
      />

      <Route
        path="/mini-games/find-pokemon-name/play"
        element={
          <Loader>
            <FindPokemonNameGame />
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
        path="*"
        element={
          <Loader>
            <NotFound />
          </Loader>
        }
      />
    </Routes>
  );
};

export default Routing;
