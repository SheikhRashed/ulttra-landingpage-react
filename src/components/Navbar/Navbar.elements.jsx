import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../global.Styles';

export const Nav = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 80px;
  justify-content: space-between;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 6px;
`;
