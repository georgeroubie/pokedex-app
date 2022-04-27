import { useCallback, useContext, useEffect } from 'react';
import Pokemon from '../pokemon';
import PokemonDamage from '../pokemon/PokemonDamage';
import { AppContext } from './../../state/Context';
import Search from './../search';

const Pokedex = () => {
  const {
    state: { loading, currentPokemon },
    setCurrentPokemon,
  } = useContext(AppContext);

  const checkInternetConnection = useCallback(() => {
    if (navigator && navigator.onLine === false) {
      alert('Internet connection is required');
      setTimeout(() => checkInternetConnection(), 100);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('offline', () => checkInternetConnection());
  }, [checkInternetConnection]);

  const resetPokemon = (ev) => {
    ev.preventDefault();
    setCurrentPokemon(null);
  };

  return (
    <div className="pokedex">
      <div className="pokedex-main">
        <div className="pokedex-frame">{currentPokemon ? <Pokemon /> : <Search />}</div>
      </div>
      <div className="pokedex-seperator">
        <a href="/" className={loading ? 'loading' : ''} onClick={resetPokemon}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M8 6.012H1.42L3.355 0l1.718 2.223A11.931 11.931 0 0112 .012c6.623 0 12 5.377 12 12S18.623 24 12 24 0 18.635 0 12.012c0-1.036.132-2.041.379-3h2.079a10.01 10.01 0 00-.458 3c0 5.52 4.481 10 10 10 5.52 0 10-4.48 10-10 0-5.519-4.48-10-10-10a9.944 9.944 0 00-5.703 1.796L8 6.012zM12 8c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
          </svg>
        </a>
      </div>
      <div className="pokedex-secondary">
        <div className="pokedex-frame">{currentPokemon && <PokemonDamage />}</div>
      </div>
    </div>
  );
};

export default Pokedex;
