import styled from 'styled-components';

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid black;
  margin-bottom: 1rem;
`;

const StyledText = styled.div`
  font-size: 1.5rem;
  border: 1px solid black;
  width: 100%;
`;

const Card = ({card_id}) => {

  return (  
    <StyledCardContainer>
        <StyledImg src={`${process.env.PUBLIC_URL}/assets/images/perso_${card_id}.jpg`} alt="placeholder" />
        <StyledText>
          Blabla
        </StyledText>
    </StyledCardContainer>
  )
};

export default Card;