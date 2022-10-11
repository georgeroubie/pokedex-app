import { useState } from 'react';
import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../../components/layout/PageWrapper';
import PokedexBottom from '../../../components/layout/PokedexBottom';
import PokedexTop from '../../../components/layout/PokedexTop';
import Description from '../../../components/typography/Description';
import Subtitle from '../../../components/typography/Subtitle';
import { BaseButtonStyle } from '../../../theme/styles/buttons';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const NavLink = styled(_NavLink)`
  display: block;
  width: 100%;
  ${BaseButtonStyle}
`;

const Selection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const Checkbox = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.small};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const FindPokemonName = () => {
  const [playWithOriginalPokemon, setPlayWithOriginalPokemon] = useState(true);

  function handleOnChange({ target }) {
    setPlayWithOriginalPokemon(target.checked);
  }

  return (
    <PageWrapper>
      <PokedexTop>
        <TopWrapper>
          <Subtitle>Who's that Pokemon?</Subtitle>
          <Description>Find the name of the blurred Pokemon!</Description>
        </TopWrapper>
      </PokedexTop>
      <PokedexBottom>
        <Selection>
          <Checkbox
            type="checkbox"
            id="only_original_pokemon"
            name="only_original_pokemon"
            checked={playWithOriginalPokemon}
            onChange={handleOnChange}
          />
          <Label htmlFor="only_original_pokemon">Use only original Pokemons</Label>
        </Selection>
        <NavLink
          to={`/mini-games/find-pokemon-name/play?only-original-pokemon=${playWithOriginalPokemon ? 'yes' : 'no'}`}
        >
          PLAY
        </NavLink>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default FindPokemonName;
