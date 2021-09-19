import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  padding: 0px 50px;

  @media (max-width: 991px) {
    padding: 0px 30px;
  }
`;

export default GlobalStyle;
