import React from 'react'
import { contactEn } from '../../translate/english'
import { contactEs } from '../../translate/spanish'
import { AFooter, ButtonFooter, FooterContainer, FooterDiv, GitHub, Linkendin, LinkendinDiv, WhatApp, WhatAppDiv } from './FooterStyles'

function Footer() {
    return (
        <FooterContainer>
            <FooterDiv>
           
                <ButtonFooter>
                <AFooter href='https://www.google.com/' target='_blank'>
                 <WhatApp/>&nbsp; +5491163552371
                 </AFooter>
                </ButtonFooter>
          
                
              

                <ButtonFooter>                  
                <AFooter href='https://github.com/cristian-daniel88'>
                    <GitHub/> &nbsp; https://github.com/cristian-daniel88       
                </AFooter>
                </ButtonFooter>

                <ButtonFooter>
                <AFooter href='https://www.linkedin.com/in/cristian-daniel-herrera-7a2794a9/'>
                <Linkendin/> &nbsp; https://www.linkedin.com/in/cristian-daniel-herrera-7a2794a9/
                </AFooter>
                </ButtonFooter>
            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer
