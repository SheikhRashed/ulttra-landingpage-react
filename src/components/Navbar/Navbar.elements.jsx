import styled from 'styled-components';
import { FaMagento, FaBars, FaTimes } from 'react-icons/fa';
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

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0.5rem 1rem;
  height: 100%;

  @media (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
`;
