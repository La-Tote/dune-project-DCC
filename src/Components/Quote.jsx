import styled from 'styled-components';

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
`;

const Quote = (props) => {
  return (
    <StyledQuote>
      <StytledAvatar src={`${process.env.PUBLIC_URL}/assets/images/perso_1.jpg`} alt="placeholder" />
      <div>
        <div>Nom</div>
        <div>Role</div>
        <div>"Quote"</div>
      </div>
    </StyledQuote>
  );
};

export default Quote;