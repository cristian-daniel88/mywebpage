import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonBurguer, ButtonBurguerContainer, LiBurguer, Menu, MenuContainer, NavBurguer, UlBurguer } from './ToggleMenuStyles'

function ToggleMenu() {
    const toggle = useSelector(state => state.burger.toggle);
    console.log(toggle)


    return (
        <Menu toggle={toggle}>
                <MenuContainer>

                    <NavBurguer>
                        <UlBurguer>
                            <LiBurguer>
                                    Home
                            </LiBurguer>

                            <LiBurguer>
                                    About me
                            </LiBurguer>

                            <LiBurguer>
                                    Projects
                            </LiBurguer>

                            <LiBurguer>
                                    Contact
                            </LiBurguer>

                            <LiBurguer>
                                   Language
                            </LiBurguer>
                        </UlBurguer>

                        <ButtonBurguerContainer>
                            <ButtonBurguer/>
                              
                    </ButtonBurguerContainer>
                    </NavBurguer>

                  

                </MenuContainer>
        </Menu>
    )
}

export default ToggleMenu
