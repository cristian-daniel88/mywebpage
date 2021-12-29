import React from "react";
import {
  ButtonTranslate,
  Details,
  Flag,
  H2,
  MenuBurguer,
  Name,
  Nav,
  NavBarContainer,
  NavLi,
  NavUl,
  PhotoContainer,
  Position,
  Profile,

} from "./NavBarStyles";

function NavBar() {
  return (
    <NavBarContainer>
      <Profile>
        <PhotoContainer />

        <Details>
          <Name>Cristian Daniel Herrera</Name>

          <Position>
            <H2>Web Developer</H2>
            <MenuBurguer />
          </Position>
        </Details>
      </Profile>

      <Nav>
        <NavUl>
          <NavLi>Home</NavLi>
          <NavLi>About me</NavLi>
          <NavLi>Projects</NavLi>
          <NavLi>Contact</NavLi>
          <ButtonTranslate><Flag/>Es</ButtonTranslate>
        </NavUl>

        
      </Nav>

    </NavBarContainer>
  );
}

export default NavBar;
