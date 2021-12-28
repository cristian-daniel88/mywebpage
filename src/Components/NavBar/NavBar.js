

import React from 'react'
import { ButtonTranslate, Details, H2, MenuBurguer, Name, Nav, NavBarContainer, NavLi, NavUl, PhotoContainer, Position, Profile, TranslateContainer } from './NavBarStyles';


function NavBar() {
    return (
        <NavBarContainer>

            <Profile>

               <PhotoContainer/>

               <Details>

               <Name>
                   Cristian Daniel Herrera
               </Name>
                    
               <Position>
                   <H2>
                       Web Developer
                   </H2>
                   <MenuBurguer/>     
               </Position>
              
               </Details>

            </Profile>




            <Nav>

                <NavUl>
                    <NavLi>About me</NavLi>
                    <NavLi>Projects</NavLi>
                    <NavLi>Contact</NavLi>
                </NavUl>

                <TranslateContainer>
                    <ButtonTranslate>En</ButtonTranslate>
                    <ButtonTranslate>Es</ButtonTranslate>
                </TranslateContainer>
            </Nav>


        </NavBarContainer>
        
    )
}

export default NavBar
