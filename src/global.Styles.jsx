import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

li,ol { 
  list-style: none;
}

a {

  text-decoration: none;
}

img { 
  width: inherit;
  height: inherit;
  object-fit: cover;
}

button { 
  outline: none;
  border: 0;
  cursor: pointer;
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

export const Button = styled.button`
  color: #fff;
  font-size: ${({ fontBIg }) => (fontBIg ? '20px' : '16px')};
  white-space: nowrap;
  border-radius: 4px;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
