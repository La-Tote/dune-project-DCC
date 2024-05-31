import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ends from '../Data/ends.js';

import Button from '../Components/Button';

const StyledOutroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2rem;
  background-image: url(${props => props.endLevel === "1" ? `${process.env.PUBLIC_URL}/assets/images/fond_outro_bad.png` : `${process.env.PUBLIC_URL}/assets/images/fond_outro_good.png`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 2rem;
  margin-top: 0rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-size: 1.2rem;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const StyledTextBloc = styled.div`
  margin-bottom: 1rem;
`;

const Outro = ({setStep, endId }) => {

  const [end, setEnd] = useState({});

  useEffect(() => {
    console.log(ends.find(end => end.fin_id == endId));
    setEnd(ends.find(end => end.fin_id == endId));
  }, [endId]);

  return (
    end !== null && end !==  undefined && (
      <>
        <StyledOutroContainer endLevel={end.fin_level}>
          <TextContainer>
            <StyledTitle>{end.fin_level === "1" ? "Game Over !" : "Félicitations !"}</StyledTitle>
            <StyledTextBloc>{end.fin_text}</StyledTextBloc>
          </TextContainer>
          <Button 
            text="Recommencer"
            handleClick={() => setStep(0)}
          />
        </StyledOutroContainer>
      </>
    )
  );
};

export default Outro;