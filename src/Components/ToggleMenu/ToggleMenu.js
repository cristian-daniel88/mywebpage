import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { burguerMenu } from "../../redux/burguerMenu/burgerMenuActions";
import { changeLanguage } from "../../redux/language/languageActions";
import {
  ButtonBurguer,
  ButtonBurguerContainer,
  ButtonMenu,
  ButtonMenuLanguage,
  DetailsLanguage,
  LiBurguer,
  Menu,
  MenuContainer,
  NavBurguer,
  SummaryLanguage,
  UlBurguer,
} from "./ToggleMenuStyles";


function ToggleMenu() {
  const toggle = useSelector((state) => state.burger.toggle);
  const dispatch = useDispatch();
  const language = useSelector(state => state.language.english);

  const toggleMenu = () => {
    dispatch(burguerMenu());
  };

  const switchLanguage = () => {
    dispatch(changeLanguage())
  }

  return (
    <Menu toggle={toggle}>
      <MenuContainer>
        <NavBurguer>
          <UlBurguer>
            <LiBurguer><ButtonMenu>Home</ButtonMenu></LiBurguer>

            <LiBurguer><ButtonMenu>About me</ButtonMenu></LiBurguer>

            <LiBurguer><ButtonMenu>Projects</ButtonMenu></LiBurguer>

            <LiBurguer><ButtonMenu>Contact</ButtonMenu></LiBurguer>

            <LiBurguer>
              <DetailsLanguage>
                  <SummaryLanguage>
                      Language
                  </SummaryLanguage>

                    <ButtonMenuLanguage disabled={language} switch={language} onClick={switchLanguage}>
                        <img src="./assets/ukIdioma.jpg" width={'25px'}/>
                        English
                    </ButtonMenuLanguage>

                    
                    <ButtonMenuLanguage disabled={!language} switch={!language} onClick={switchLanguage}>
                        <img src="./assets/spainIdioma.png" width={'25px'}/>
                        English
                    </ButtonMenuLanguage>

                    
              </DetailsLanguage>
            </LiBurguer>
          </UlBurguer>

          <ButtonBurguerContainer>
            <ButtonMenu>

            <ButtonBurguer onClick={toggleMenu} />
            </ButtonMenu>
          </ButtonBurguerContainer>
        </NavBurguer>
      </MenuContainer>
    </Menu>
  );
}

export default ToggleMenu;
