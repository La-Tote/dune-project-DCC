import styled from 'styled-components';

const StyledQuestion = styled.div`
  font-size: 1.5rem;
  border: 1px solid black;
  width: 100%;
  width: 300px;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
`;

const Question = () => {
  return (
    <StyledQuestion>
      <div>Que faîtes-vous ?</div>
    </StyledQuestion>
  );
};

export default Question;