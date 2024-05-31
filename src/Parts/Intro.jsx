import styled from 'styled-components';

import Button from '../Components/Button';

const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2rem;
  background-image: url(${props => `${process.env.PUBLIC_URL}/assets/images/fond_intro.png`});
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
  max-width: 600px;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-size: 1.2rem;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`;

const StyledTextBloc = styled.div`
  margin-bottom: 1rem;
`;

const Intro = ({setStep}) => {
  return (
    <StyledIntroContainer>
      <TextContainer>
        <StyledTitle>Dune 3</StyledTitle>
        <StyledTextBloc>Vous êtes candidat.e à la mairie de Dune-les-bains, une petite ville côtière de Bretagne.</StyledTextBloc>
        <StyledTextBloc>Les dunes de votre ville sont célèbres pour leur beauté, mais elles protègent surtout vos concitoyens de la montée des eaux due au réchauffement climatique.</StyledTextBloc>
        <StyledTextBloc>L’urbanisme et le tourisme ont saccagé vos dunes au cours du XXe siècle.</StyledTextBloc>
        <StyledTextBloc>A vous de sauver vos dunes... Et votre ville, dont elles sont le rempart naturel.</StyledTextBloc>
      </TextContainer>
      <Button 
        text="Commencer à jouer"
        handleClick={() => setStep(1)}
      />
    </StyledIntroContainer>
  );
};

export default Intro;