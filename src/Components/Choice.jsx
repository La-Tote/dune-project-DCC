import styled from 'styled-components';

const StyledChoice = styled.button`
  font-size: 1.5rem;
  border: 1px solid black;
  width: 100%;
  width: 300px;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
`;

const Choice = (props) => {
  const { setHasChosen } = props;

  const handleClick = () => {
    console.log('Choice');
    setHasChosen(true);
  };

    return (
      <StyledChoice onClick={()=> handleClick()}>
          <div>Choice</div>
      </StyledChoice>
    )
};

export default Choice;