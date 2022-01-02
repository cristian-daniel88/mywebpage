import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { burguerMenu } from "../../redux/burguerMenu/burgerMenuActions";
import {
  ButtonBurguer,
  ButtonBurguerContainer,
  LiBurguer,
  Menu,
  MenuContainer,
  NavBurguer,
  UlBurguer,
} from "./ToggleMenuStyles";
import { Simulate } from "react-dom/cjs/react-dom-test-utils.production.min";

function ToggleMenu() {
  const toggle = useSelector((state) => state.burger.toggle);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(burguerMenu());
  };

  return (
    <Menu toggle={toggle}>
      <MenuContainer>
        <NavBurguer>
          <UlBurguer>
            <LiBurguer>Home</LiBurguer>

            <LiBurguer>About me</LiBurguer>

            <LiBurguer>Projects</LiBurguer>

            <LiBurguer>Contact</LiBurguer>

            <LiBurguer>
              <details >
                <summary>
                        Language
                </summary>

                
              </details>
            </LiBurguer>
          </UlBurguer>

          <ButtonBurguerContainer>
            <ButtonBurguer onClick={toggleMenu} />
          </ButtonBurguerContainer>
        </NavBurguer>
      </MenuContainer>
    </Menu>
  );
}

export default ToggleMenu;
