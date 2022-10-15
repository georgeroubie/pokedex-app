import { useCallback, useContext, useEffect, useState } from 'react';
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
  width: 32px;
`;

const SelectLetter = () => {
  const [clickedLetters, setClickedLetters] = useState([]);
  const { state, setLives, setPlayerFounds } = useContext(FindPokemonNameContext);
  const { lives, pokemon, playerFounds } = state;
  const { nameArray } = pokemon;

  const onLetterSelect = useCallback(
    (selectedLetter) => {
      if (clickedLetters.includes(selectedLetter)) {
        return;
      }

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

      setClickedLetters((prevClickedLetters) => [...prevClickedLetters, selectedLetter]);
    },
    [clickedLetters, lives, nameArray, playerFounds, setLives, setPlayerFounds],
  );

  const onKeyDown = useCallback(
    (e) => {
      const key = e.key.toLowerCase();

      if (key.length !== 1 || !key.match(/[a-z]/)) {
        return;
      }

      onLetterSelect(key);
    },
    [onLetterSelect],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown, false);
    return () => window.removeEventListener('keydown', onKeyDown, false);
  }, [onKeyDown]);

  return (
    <SelectLetterButtonsWrapper>
      {LETTERS.map((l) => (
        <SelectLetterButton key={l} disabled={clickedLetters.includes(l)} onClick={() => onLetterSelect(l)}>
          {l}
        </SelectLetterButton>
      ))}
    </SelectLetterButtonsWrapper>
  );
};

export default SelectLetter;
