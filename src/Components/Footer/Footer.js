import React from 'react'
import { useSelector } from 'react-redux'
import { contactEn } from '../../translate/english'
import { contactEs } from '../../translate/spanish'
import { AFooter, ButtonFooter, FooterContainer, FooterDiv, GitHub, Linkendin, LinkendinDiv, WhatApp, WhatAppDiv, FooterDiv2 } from './FooterStyles'

function Footer() {
    const language = useSelector(state => state.language.english)
    return (
        <FooterContainer>

            <FooterDiv>
           
                <ButtonFooter>
                <AFooter href={language ? contactEn : contactEs} target='_blank'>
                 <WhatApp/>&nbsp; +44 7864 069428
                 </AFooter>
                </ButtonFooter>
          
                
              

                <ButtonFooter>                  
                <AFooter href='https://github.com/cristian-daniel88' target='_blank'>
                    <GitHub/>&nbsp; https://github.com/cristian-daniel88       
                </AFooter>
                </ButtonFooter>

                <ButtonFooter> 
               <AFooter href='https://www.linkedin.com/in/cristian-daniel-herrera-7a2794a9/' target='_blank'>
                <Linkendin/>&nbsp; https://www.linkedin.com/in/cristian-daniel-herrera-7a2794a9
                </AFooter>
                </ButtonFooter>
               
            </FooterDiv>
            
            <FooterDiv2>

            &#169; Copyright 2022 Cristian Daniel Herrera, Web developer | Todos los derechos reservados
            </FooterDiv2>
            
            
            </FooterContainer>
    )
}

export default Footer
