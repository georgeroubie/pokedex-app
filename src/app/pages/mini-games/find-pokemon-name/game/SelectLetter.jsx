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

  &:disabled {
    opacity: 0.3;
  }
`;

const SelectLetter = () => {
  const [clickedLetters, setClickedLetters] = useState([]);
  const { state, setLives, setPlayerFounds, startGame } = useContext(FindPokemonNameContext);
  const { loading, lives, gameStatus, pokemon, playerFounds } = state;
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

  function playAgain() {
    setClickedLetters([]);
    startGame();
  }

  if (loading) {
    return null;
  }

  if (gameStatus === 'win') {
    return (
      <div>
        'You are awesome!' <button onClick={playAgain}>Next pokemon</button>
      </div>
    );
  }

  if (lives === 0) {
    return (
      <div>
        You lost, the pokemon name was {pokemon.name}. <button onClick={playAgain}>Try again</button>
      </div>
    );
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
