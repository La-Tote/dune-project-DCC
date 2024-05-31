import React, { useState } from 'react';

import './App.css';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

import Intro from './Parts/Intro';
import Scenario from './Parts/Scenario';
import Outro from './Parts/Outro';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {

  const [step, setStep] = useState(0);
  const [endId, setEndId] = useState("");

  return (
    <StyledAppContainer className="App">
      <GlobalStyle />
      {step === 0 && <Intro setStep={setStep} />}
      {step === 1 && <Scenario setStep={setStep} setEndId={setEndId}/>}
      {step === 2 && <Outro setStep={setStep} endId={endId} />}

    </StyledAppContainer>
  );
}

export default App;
