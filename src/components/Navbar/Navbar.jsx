import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../global.Styles';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavLogo,
  NavMenu,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavIcon />
          ULTRA
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to='/'>Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/services'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/products'>Products</NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to='/sign-up'>
                <Button primary>Sign Up</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to='/sign-in'>
                <Button primary fontBig>
                  Sign in
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
