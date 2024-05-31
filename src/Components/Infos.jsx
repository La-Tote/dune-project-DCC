import styled from 'styled-components';

const StyledInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const Infos = () => {
  return (
    <StyledInfosContainer>
      <div>Voici les conséquences de votre choix :</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.</div>
    </StyledInfosContainer>
  )
};

export default Infos;