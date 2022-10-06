import { useContext } from 'react';
import styled from 'styled-components';
import { LETTERS } from '../constants';
import { FindPokemonNameContext } from '../state/Context';

const SelectLetterButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: ${({ theme: { spacing } }) => spacing.small};
`;

const SelectLetterButton = styled.button`
  width: 35px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: ${({ theme: { spacing } }) => spacing.xsmall};
  border-radius: ${({ theme: { border } }) => border.radius};
  border: 0;
  background-color: ${({ theme: { colors } }) => colors.textPrimary};
  color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
`;

const SelectLetter = () => {
  const { state, setLives, setPlayerFounds } = useContext(FindPokemonNameContext);
  const { lives, pokemon, playerFounds } = state;
  const { nameArray } = pokemon;

  function onLetterClick(selectedLetter) {
    let letterWasFound = false;
    const updatedFoundNameArray = playerFounds.map((letter, index) => {
      if (nameArray[index] === selectedLetter) {
        letterWasFound = true;
        return selectedLetter;
      }
      return letter;
    });

    if (letterWasFound) {
      setPlayerFounds(updatedFoundNameArray);
    } else {
      setLives(lives - 1);
    }
  }

  return (
    <SelectLetterButtonsWrapper>
      {LETTERS.map((l) => (
        <SelectLetterButton key={l} disabled={playerFounds.includes(l)} onClick={() => onLetterClick(l)}>
          {l}
        </SelectLetterButton>
      ))}
    </SelectLetterButtonsWrapper>
  );
};

export default SelectLetter;
