import styled from "styled-components";

const StyledScoresContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const Scores = () => {
    return (
        <StyledScoresContainer>
            <div>
              <div>Environnement</div>
            </div>
            <div>
              <div>Côté de popularité</div>
            </div>
            <div>
              <div>Finances</div>
            </div>
        </StyledScoresContainer>
    );
};

export default Scores;