import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LETTERS } from '../constants';

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

const SelectLetter = ({ game, setGame }) => {
  const { nameArray, foundNameArray } = game || {};

  function onLetterClick(selectedLetter) {
    let letterWasFound = false;
    const updatedFoundNameArray = foundNameArray.map((letter, index) => {
      if (nameArray[index] === selectedLetter) {
        letterWasFound = true;
        return selectedLetter;
      }
      return letter;
    });

    if (letterWasFound) {
      setGame((prevGame) => ({
        ...prevGame,
        foundNameArray: updatedFoundNameArray,
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        lives: prevGame.lives - 1,
      }));
    }
  }

  return (
    <SelectLetterButtonsWrapper>
      {LETTERS.map((l) => (
        <SelectLetterButton key={l} disabled={foundNameArray.includes(l)} onClick={() => onLetterClick(l)}>
          {l}
        </SelectLetterButton>
      ))}
    </SelectLetterButtonsWrapper>
  );
};

SelectLetter.propTypes = {
  game: PropTypes.shape({
    lives: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    nameArray: PropTypes.arrayOf(PropTypes.string),
    foundNameArray: PropTypes.arrayOf(PropTypes.string),
  }),
  setGame: PropTypes.func,
};

export default SelectLetter;
