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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { changeEmailAction } from "../../redux/whatsappEmail/whatsappEmailActions";
import { screenAction } from "../../redux/screen/screenReducerAction";
import { captchaErrorAction } from "../../redux/captcha/captchaActions";

function NavBar() {
  
  const stateEmail = useSelector(state => state.email.email);
    
 const dispatch = useDispatch();
 const language = useSelector(state => state.language.english);
 const [hover, setHover] = useState(false);
 const history = useHistory();
 
 

 const handScreen = () => {
     dispatch(screenAction())
 }


  const switchLanguage = () => {
    dispatch(changeLanguage())
  }

  const toggleMenu = () => {
     dispatch(burguerMenu())
  }

  function name(params) {
    setHover(!hover)
  }

  const pushProfile = () => {
    dispatch(captchaErrorAction(false))
    if (stateEmail) {
      
      dispatch(changeEmailAction())
    }
      history.push('/profile');
  }

  const pushHome = () => {
    dispatch(captchaErrorAction(false))
    if (stateEmail) {
      
      dispatch(changeEmailAction())
    }
    history.push('/');
  }

  const pushProjects = () => {
    dispatch(captchaErrorAction(false))
    if (stateEmail) {
      
      dispatch(changeEmailAction())
    }
    history.push('/projects');

  }

  const pushContact = () => {
    dispatch(captchaErrorAction(false))
    if (stateEmail) {
      
      dispatch(changeEmailAction())
    }
    history.push('/contact');
  }



  return (
    <NavBarContainer>
     
      <Profile>
        <PhotoContainer onClick={handScreen}/>

        <Details>
          <Name onClick={pushHome}>Cristian Herrera Dev</Name>

          <Position>
            <H2>Web Developer</H2>
            <MenuBurguerBotton onClick={toggleMenu}>
              
            <MenuBurguer  />
            </MenuBurguerBotton>
          </Position>
        </Details>
      </Profile>

      <Nav>
        <NavUl>
         
          <NavLi>
            <NavLiDivI>          
              <NavLiDivII onClick={pushHome}> {language ? enNavItem1 : esNavItem1}</NavLiDivII>
               <NavLiDivIII>
                  home
               </NavLiDivIII>
            </NavLiDivI>
          </NavLi>

          <NavLi onClick={pushProfile}>
            <NavLiDivI>
              <NavLiDivII>{language ? enNavItem2 : esNavItem2}</NavLiDivII>
               <NavLiDivIII>
                  about me
               </NavLiDivIII>
            </NavLiDivI>
          </NavLi>

          <NavLi  onMouseEnter={name} onMouseLeave={name} onClick={pushProjects}>
            <NavLiDivI>
              <NavLiDivII >{language ? enNavItem3 : esNavItem3}</NavLiDivII>
            <NavLiDivIII hover={false}>
            </NavLiDivIII>
            </NavLiDivI>
          </NavLi>

          <NavLi onClick={pushContact}>
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
