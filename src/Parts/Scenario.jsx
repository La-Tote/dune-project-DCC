import React, { useState } from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';
import Choice from '../Components/Choice';
import Question from '../Components/Question';
import Quotes from '../Components/Quotes';
import Infos from '../Components/Infos';
import Scores from '../Components/Scores';

const StyledScenarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledScenario = styled.div`
  display: flex;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

const ScenarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  border: 1px solid black;
  width: 100%;
  width: 300px;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
`;

const Scenario = (props) => {

  const { 
    card_id 
  } = props;

  const [hasChosen, setHasChosen] = useState(false);
  const [nextScenarioId, setNextScenarioId] = useState(0);

  const handleContinueClick = () => {
    setHasChosen(false);
    setNextScenarioId(nextScenarioId + 1);
  }

  return (
    <StyledScenarioContainer>
      <Scores />
      {!hasChosen ?
        <StyledScenario>
          <SideContainer>
            <Choice setHasChosen={setHasChosen}/>
          </SideContainer>
          <ScenarioContainer>
            <Card 
              card_id={card_id}
            />
            <Question />
          </ScenarioContainer>
          <SideContainer>
            <Choice setHasChosen={setHasChosen}/>
          </SideContainer>
        </StyledScenario>
      :
        <StyledScenario>
          <SideContainer>
            <Infos />
          </SideContainer>
          <ScenarioContainer>
            <Card 
              card_id={card_id}
            />
            <StyledButton onClick={()=> handleContinueClick()}>Continuer</StyledButton>
          </ScenarioContainer>
          <SideContainer>
            <Quotes/>
          </SideContainer>
        </StyledScenario>
      }
    </StyledScenarioContainer>
  )
};

export default Scenario;