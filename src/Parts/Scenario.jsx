import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';
import Choice from '../Components/Choice';
import Quotes from '../Components/Quotes';
import Consequences from '../Components/Consequences.jsx';
import Button from '../Components/Button';

import cards from '../Data/cards.js';
import choices from '../Data/choices.js';

const StyledScenarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => `${process.env.PUBLIC_URL}/assets/images/fond_scenario.png`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
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

const Scenario = ({setStep, setEndId}) => {

  const [hasChosen, setHasChosen] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [chosenChoice, setChosenChoice] = useState();
  const [nextCardId, setNextCardId] = useState(0);
  const [cardInfos, setCardInfos] = useState({});
  const [choice1Infos, setChoice1Infos] = useState();
  const [choice2Infos, setChoice2Infos] = useState();
  const [playerScores, setPlayerScores] = useState({
    money: 50,
    ecology: 50,
    social: 50
  });

  useEffect(() => {
    setCardInfos(cards[nextCardId]);
  }, [nextCardId]);

  useEffect(() => {
    const c1 = choices.find(choice => choice.choix_id === cardInfos.choix_1_id);
    const c2 = choices.find(choice => choice.choix_id === cardInfos.choix_2_id);
    setChoice1Infos(c1);
    setChoice2Infos(c2);
  }, [cardInfos]);

  const handleChoiceClick = (choiceInfos, choiceNumber) => {
    setChosenChoice(choiceInfos);
    let nextStep;
    if(choiceNumber == "1") {
      nextStep = cardInfos.next_step_id_1;
    } else if (choiceNumber == "2") {
      nextStep = cardInfos.next_step_id_2;
    }
    checkIfFinish(nextStep);
    setHasChosen(true);
  }

  const checkIfFinish = (nextStep) => {
    if(nextStep.startsWith("fin_")) {
      let value = nextStep.split("_")[1];
      setEndId(value);
      setIsFinish(true);
    }
  };


  const handleContinueClick = () => {
    if(isFinish) {
      setStep(2);
      return;
    }
    setHasChosen(false);
    setNextCardId(nextCardId + 1);
  };

  return (
    <StyledScenarioContainer>
      {!hasChosen ?
        <StyledScenario>
          <SideContainer>
            {choice1Infos &&
              <Choice 
                title="Choix 1"
                text={choice1Infos.choix_text_info}
                handleClick={()=> handleChoiceClick(choice1Infos, "1")}
              />
            }
          </SideContainer>
          <ScenarioContainer>
            <Card cardInfos={cardInfos} playerScores={playerScores}/>
            <Button 
              isDisabled={true}
              text={cardInfos.card_question}
            />
          </ScenarioContainer>
          <SideContainer>
            {choice2Infos &&
              <Choice 
                title="Choix 2"
                text={choice2Infos.choix_text_info}
                handleClick={()=> handleChoiceClick(choice2Infos, "2")}
              />
            }
          </SideContainer>
        </StyledScenario>
      :
        <StyledScenario>
          <SideContainer>
            <Consequences consequence={chosenChoice.choix_text_consequence}/>
          </SideContainer>
          <ScenarioContainer>
            <Card cardInfos={cardInfos} playerScores={playerScores}/>
            <Button 
              handleClick={()=> handleContinueClick()}
              text="Continuer" 
            />
          </ScenarioContainer>
          <SideContainer>
            <Quotes chosenChoice={chosenChoice}/>
          </SideContainer>
        </StyledScenario>
      }
    </StyledScenarioContainer>
  )
};

export default Scenario;