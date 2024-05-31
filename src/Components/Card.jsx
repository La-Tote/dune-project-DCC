import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Scores from '../Components/Scores';

import persos from '../Data/persos.js';

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  border: 1px solid black;
  width: 300px;
  height: 400px;
  padding: 1rem;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-right: 4rem;
  margin-left: 4rem;
  margin-bottom: 2rem;
  background-color: white;
  position: relative;
`;


const StyledImg = styled.img`
  position: absolute;
  top: 20px;
  left: 35px;
  width: 80%;
  height: auto;
`;

const StyledText = styled.div`
  font-size: 1.2rem;
  border: ${props => `2px solid ${props.color}`};
  overflow: auto;
  padding: 3rem 1rem 1rem 1rem;
  border-radius: 10px;
  max-height: 40%;
`;

const Card = ({cardInfos, playerScores}) => {

  const [perso, setPerso] = useState();

  useEffect(() => {
    setPerso(persos.find(perso => perso.id == cardInfos.card_perso_id));
  }, [cardInfos]);

  return (
    <>
      <Scores playerScores={playerScores}/>  
      <StyledCardContainer>
          {perso && 
          <>
            <StyledImg src={`${process.env.PUBLIC_URL}/assets/images/persos/${perso.slug}.png`} alt="placeholder" />
            <StyledText color={perso.couleur}>
              {cardInfos.card_text}
            </StyledText>
          </>
          }
      </StyledCardContainer>
    </>
  )
};

export default Card;