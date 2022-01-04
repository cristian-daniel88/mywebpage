import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { burguerMenu } from "../../redux/burguerMenu/burgerMenuActions";
import { changeLanguage } from "../../redux/language/languageActions";
import {
  enNavItem1,
  enNavItem2,
  enNavItem3,
  enNavItem4,
  enNavItem5,
  enNavItem6,
  enNavItem7,
} from "../../translate/english";
import {
  esNavItem1,
  esNavItem2,
  esNavItem3,
  esNavItem4,
  esNavItem5,
  esNavItem6,
  esNavItem7,
} from "../../translate/spanish";
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
  const language = useSelector((state) => state.language.english);
  const history = useHistory();

  const pushProfile = () => {
    dispatch(burguerMenu());
    history.push("/profile");
  };

  const toggleMenu = () => {
    dispatch(burguerMenu());
  };

  const switchLanguage = () => {
    dispatch(changeLanguage());
  };

  const pushHome = () => {
    dispatch(burguerMenu());
    history.push("/");
  };

  return (
    <Menu toggle={toggle}>
      <MenuContainer>
        <NavBurguer>
          <UlBurguer>
            <LiBurguer>
              <ButtonMenu onClick={pushHome}>
                {" "}
                {language ? enNavItem1 : esNavItem1}
              </ButtonMenu>
            </LiBurguer>

            <LiBurguer onClick={pushProfile}>
              <ButtonMenu> {language ? enNavItem2 : esNavItem2}</ButtonMenu>
            </LiBurguer>

            <LiBurguer>
              <ButtonMenu> {language ? enNavItem3 : esNavItem3}</ButtonMenu>
            </LiBurguer>

            <LiBurguer>
              <ButtonMenu> {language ? enNavItem4 : esNavItem4}</ButtonMenu>
            </LiBurguer>

            <LiBurguer>
              <DetailsLanguage>
                <SummaryLanguage>
                  {language ? enNavItem5 : esNavItem5}
                </SummaryLanguage>

                <ButtonMenuLanguage
                  disabled={language}
                  switch={language}
                  onClick={switchLanguage}
                >
                  <img src="./assets/ukIdioma.jpg" width={"25px"} />
                  &nbsp;
                  {language ? enNavItem6 : esNavItem6}
                </ButtonMenuLanguage>

                <ButtonMenuLanguage
                  disabled={!language}
                  switch={!language}
                  onClick={switchLanguage}
                >
                  <img src="./assets/spainIdioma.png" width={"25px"} />
                  &nbsp;
                  {language ? enNavItem7 : esNavItem7}
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
