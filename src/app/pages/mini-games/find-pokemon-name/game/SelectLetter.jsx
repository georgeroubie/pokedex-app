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
  const { nameArray, foundNameArray } = game;

  function onLetterClick(selectedLetter) {
    const updatedFoundNameArray = foundNameArray.map((letter, index) => {
      if (nameArray[index] === selectedLetter) {
        return selectedLetter;
      }
      return letter;
    });

    setGame((prevGame) => ({
      ...prevGame,
      foundNameArray: updatedFoundNameArray,
    }));
  }

  return (
    <SelectLetterButtonsWrapper>
      {LETTERS.map((l) => (
        <SelectLetterButton key={l} onClick={() => onLetterClick(l)}>
          {l}
        </SelectLetterButton>
      ))}
    </SelectLetterButtonsWrapper>
  );
};

SelectLetter.propTypes = {
  game: PropTypes.shape({
    lives: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nameArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    foundNameArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  setGame: PropTypes.func.isRequired,
};

export default SelectLetter;
