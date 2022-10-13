import { useContext, useState } from 'react';
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

    setClickedLetters((prevClickedLetters) => [...prevClickedLetters, selectedLetter]);
  }

  return (
    <SelectLetterButtonsWrapper>
      {LETTERS.map((l) => (
        <SelectLetterButton key={l} disabled={clickedLetters.includes(l)} onClick={() => onLetterClick(l)}>
          {l}
        </SelectLetterButton>
      ))}
    </SelectLetterButtonsWrapper>
  );
};

export default SelectLetter;
