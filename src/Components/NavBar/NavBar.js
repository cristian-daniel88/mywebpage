import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/language/languageActions";
import { esNavItem1, esNavItem2, esNavItem3, esNavItem4 } from "../../translate/spanish";
import { enNavItem1, enNavItem2, enNavItem3, enNavItem4 } from "../../translate/english";


import {
  ButtonTranslateEn,
  ButtonTranslateEs,
  Details,
  FlagEn,
  FlagEs,
  H2,
  MenuBurguer,
  MenuBurguerBotton,
  Name,
  Nav,
  NavBarContainer,
  NavLi,
  NavLiDivI,
  NavLiDivII,
  NavLiDivIII,
  NavUl,
  PhotoContainer,
  Position,
  Profile,

} from "./NavBarStyles";
import { burguerMenu } from "../../redux/burguerMenu/burgerMenuActions";

function NavBar() {
 const dispatch = useDispatch();
 const language = useSelector(state => state.language.english);
 const [hover, setHover] = useState(false);


  const switchLanguage = () => {
    dispatch(changeLanguage())
  }

  const toggleMenu = () => {
     dispatch(burguerMenu())
  }

  function name(params) {
    setHover(!hover)
  }



  return (
    <NavBarContainer>
      <Profile>
        <PhotoContainer />

        <Details>
          <Name>Cristian Daniel Herrera</Name>

          <Position>
            <H2>Web Developer</H2>
            <MenuBurguerBotton>
              
            <MenuBurguer  onClick={toggleMenu}/>
            </MenuBurguerBotton>
          </Position>
        </Details>
      </Profile>

      <Nav>
        <NavUl>
         
          <NavLi>
            <NavLiDivI>          
              <NavLiDivII> {language ? enNavItem1 : esNavItem1}</NavLiDivII>
               <NavLiDivIII>
                  home
               </NavLiDivIII>
            </NavLiDivI>
          </NavLi>

          <NavLi>
            <NavLiDivI>
              <NavLiDivII>{language ? enNavItem2 : esNavItem2}</NavLiDivII>
               <NavLiDivIII>
                  about me
               </NavLiDivIII>
            </NavLiDivI>
          </NavLi>

          <NavLi  onMouseEnter={name} onMouseLeave={name}>
            <NavLiDivI>
              <NavLiDivII >{language ? enNavItem3 : esNavItem3}</NavLiDivII>
            <NavLiDivIII hover={false}>
            </NavLiDivIII>
            </NavLiDivI>
          </NavLi>

          <NavLi>
            <NavLiDivI>
              <NavLiDivII>{language ? enNavItem4 : esNavItem4}</NavLiDivII>
               <NavLiDivIII>
                  contact
               </NavLiDivIII>
            </NavLiDivI>
          </NavLi>
          <ButtonTranslateEn onClick={switchLanguage} disabled={language} switch={language}><FlagEn/>En</ButtonTranslateEn>
          <ButtonTranslateEs onClick={switchLanguage} disabled={!language} switch={language}><FlagEs/>Es</ButtonTranslateEs>
        </NavUl>   
      </Nav>

    </NavBarContainer>
  );
}

export default NavBar;
