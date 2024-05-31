import styled from "styled-components";

const StyledScoresContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`;

const StyledScore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledSVGContainer = styled.div`
    background-color: white;
    border-radius: 50%;
    padding: 1rem;
    height: 50px;
    width: 50px;
    margin-right: 1rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledScoreValue = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    font-family: 'Oswald', sans-serif;
`;

const Scores = ({playerScores}) => {

    return (
        <StyledScoresContainer>
            <StyledScore>
              <StyledSVGContainer>
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5 47C20.76 47 18.18 46.57 15.75 45.71C13.33 44.85 11.11 43.64 9.09999 42.08L4.98999 46.12C4.44999 46.66 3.76999 46.93 2.92999 46.93C2.08999 46.93 1.40999 46.66 0.86999 46.12C0.32999 45.58 0.0599902 44.9 0.0599902 44.06C0.0599902 43.22 0.32999 42.54 0.86999 42L4.90999 37.96C3.33999 35.95 2.12999 33.73 1.27999 31.28C0.41999 28.83 -0.0100098 26.24 -0.0100098 23.5C-9.76585e-06 16.94 2.27999 11.38 6.82999 6.83C11.38 2.28 16.94 0 23.5 0H47V23.5C47 30.06 44.72 35.62 40.17 40.17C35.62 44.72 30.06 47 23.5 47ZM23.5 41.12C28.4 41.12 32.56 39.41 35.98 35.98C39.41 32.55 41.12 28.39 41.12 23.5V5.88H23.5C18.6 5.88 14.44 7.59 11.02 11.02C7.58999 14.45 5.87999 18.61 5.87999 23.5C5.87999 25.41 6.16999 27.23 6.75999 28.97C7.34999 30.71 8.15999 32.29 9.17999 33.71L24.38 18.51C24.92 17.97 25.6 17.7 26.44 17.7C27.28 17.7 27.96 17.97 28.5 18.51C29.09 19.1 29.38 19.79 29.38 20.6C29.38 21.41 29.09 22.11 28.5 22.69L13.3 37.89C14.72 38.92 16.3 39.71 18.04 40.28C19.78 40.84 21.6 41.13 23.51 41.13L23.5 41.12Z" fill="#0E283D"/>
                </svg>
              </StyledSVGContainer>
              <StyledScoreValue>{playerScores.ecology}</StyledScoreValue>
            </StyledScore>
            <StyledScore>
              <StyledSVGContainer>
                <svg width="34" height="47" viewBox="0 0 34 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_46_73)">
                  <path d="M18.3 20.63C10.72 19.09 8.28 17.5 8.28 15.02C8.28 12.17 11.65 10.19 17.3 10.19C23.25 10.19 25.45 12.41 25.65 15.67H33.03C32.8 11.18 29.29 7.05 22.31 5.72V0H12.29V5.64C5.81 6.74 0.6 10.03 0.6 15.07C0.6 21.1 6.98 24.1 16.3 25.85C24.65 27.42 26.32 29.71 26.32 32.14C26.32 33.94 24.68 36.81 17.3 36.81C10.42 36.81 7.71 34.41 7.35 31.33H0C0.4 37.05 5.88 40.26 12.29 41.33V47H22.31V41.39C28.82 40.42 34 37.47 34 32.12C34 24.7 25.88 22.17 18.3 20.63Z" fill="#0E283D"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_46_73">
                  <rect width="34" height="47" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </StyledSVGContainer>
              <StyledScoreValue>{playerScores.money}</StyledScoreValue>
            </StyledScore>
            <StyledScore>
              <StyledSVGContainer>
                <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_46_152)">
                  <path d="M40.83 9.4C34.74 11.05 27.6 11.75 21 11.75C14.4 11.75 7.26 11.05 1.17 9.4L0 14.1C4.34 15.27 9.33 16.05 14 16.45V47H18.67V32.9H23.34V47H28.01V16.45C32.68 16.05 37.67 15.27 42.01 14.1L40.84 9.4H40.83ZM21 9.4C23.57 9.4 25.67 7.29 25.67 4.7C25.67 2.11 23.57 0 21 0C18.43 0 16.33 2.11 16.33 4.7C16.33 7.29 18.43 9.4 21 9.4Z" fill="#0E283D"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_46_152">
                  <rect width="42" height="47" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </StyledSVGContainer>
              <StyledScoreValue>{playerScores.social}</StyledScoreValue>
            </StyledScore>
        </StyledScoresContainer>
    );
};

export default Scores;