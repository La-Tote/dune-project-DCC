import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.5rem;
  border: 1px solid black;
  width: 100%;
  width: 300px;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  box-shadow: ${props => props.isDisabled ? 'none' : '10px 5px 5px rgba(0, 0, 0, 0.5)'};
  transition: transform 0.3s ease;
  &:hover {
    transform: ${props => props.isDisabled ? 'none' : 'scale(1.1)'};
  }
  disabled: ${props => props.isDisabled ? 'true' : 'false'};
`;

const StyledText = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
`;

const Button = ({text, handleClick, isDisabled=false}) => {
  return (
    <StyledButton 
      onClick={isDisabled ? () => null :  () => handleClick()}
      isDisabled={isDisabled}
    >
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

export default Button;