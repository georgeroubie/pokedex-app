import PageWrapper from '../../../../components/layout/PageWrapper';
import { FindPokemonNameProvider } from '../state/Context';
import FindPokemonNameGameWrapper from './Wrapper';

const FindPokemonNameGame = () => (
  <FindPokemonNameProvider>
    <PageWrapper>
      <FindPokemonNameGameWrapper />
    </PageWrapper>
  </FindPokemonNameProvider>
);

export default FindPokemonNameGame;
