import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import persos from '../Data/persos.js';

const StyledQuote = styled.div`
  font-size: 1.5rem;
  border: 1px solid black;
  width: 300px;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  background-color: white;
`;

const StytledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-right: 1rem;
`;

const StyledName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledRole = styled.div`
  font-size: 1rem;
`;

const StyledQuoteText = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const Quote = ({persoName, content}) => {

  const [perso, setPerso] = useState();

  useEffect(() => {
    setPerso(persos.find(perso => perso.nom == persoName));
  }, [persoName]);

  return (
    <StyledQuote>
      {perso &&
      <>
        <StytledAvatar src={`${process.env.PUBLIC_URL}/assets/images/persos/${perso.slug}.png`} alt="placeholder" />
        <div>
          <StyledName>{perso.nom}</StyledName>
          <StyledRole>{perso.role}</StyledRole>
          <StyledQuoteText>
            <span>"</span>
            {content}
            <span>"</span>
          </StyledQuoteText>
        </div>
      </>
      }
    </StyledQuote>
  );
};

export default Quote;