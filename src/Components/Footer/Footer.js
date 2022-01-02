import React from 'react'
import { useSelector } from 'react-redux'
import { contactEn, copyrightEn } from '../../translate/english'
import { contactEs, copyrightEs } from '../../translate/spanish'
import { AFooter, FooterContainer, FooterDiv, GitHub, Linkendin,  WhatApp, FooterDiv2, Copyright } from './FooterStyles'

function Footer() {
    const language = useSelector(state => state.language.english)
    return (
        <FooterContainer>

            <FooterDiv>
           
               
                <AFooter href={language ? contactEn : contactEs} target='_blank'>
                 <WhatApp/>
                 </AFooter>
             
          
                
              

                             
                <AFooter href='https://github.com/cristian-daniel88' target='_blank'>
                    <GitHub/> 
                </AFooter>
           

                <AFooter href='https://www.linkedin.com/in/cristian-daniel-herrera-7a2794a9/' target='_blank'>
                <Linkendin/>
                </AFooter>
               
               
            </FooterDiv>
            
            <FooterDiv2>
                <Copyright>

            &#169; {language ? copyrightEn : copyrightEs}
                </Copyright>
            </FooterDiv2>
            
            
            </FooterContainer>
    )
}

export default Footer
