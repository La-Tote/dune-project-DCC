import './App.css';
import styled from 'styled-components';

import Scenario from './Parts/Scenario';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${props => `${process.env.PUBLIC_URL}/assets/images/fond_scenario.png`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function App() {
  return (
    <StyledAppContainer className="App">
      <Scenario card_id={1} />
    </StyledAppContainer>
  );
}

export default App;
