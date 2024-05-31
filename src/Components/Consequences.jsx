import styled from 'styled-components';

const StyledInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const StyledTitle = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
`;

const StyledContent = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
`;

const Consequences = ({consequence}) => {

  return (
    <StyledInfosContainer>
      <StyledTitle>Conséquences de votre choix :</StyledTitle>
      <StyledContent>{consequence}</StyledContent>
    </StyledInfosContainer>
  )
};

export default Consequences;