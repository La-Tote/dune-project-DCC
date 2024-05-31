import styled from 'styled-components';

const StyledChoice = styled.button`
  font-size: 1.3rem;
  border: 1px solid black;
  width: 100%;
  width: 300px;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
`;

const Choice = (props) => {
  const { title, text, handleClick } = props;

    return (
      <StyledChoice onClick={()=> handleClick()}>
          <StyledTitle>{title}</StyledTitle>
          <div>{text}</div>
      </StyledChoice>
    )
};

export default Choice;