import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { contactEn, copyrightEn } from '../../translate/english'
import { contactEs, copyrightEs } from '../../translate/spanish'
import { AFooter, FooterContainer, FooterDiv, GitHub, Linkendin,  WhatApp, FooterDiv2, Copyright, Email, ButtonFooter } from './FooterStyles'

function Footer() {
    const language = useSelector(state => state.language.english)
    const history  = useHistory()
    const pushContact = () => {
        history.push('/contact')
      }
    
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
                
                <ButtonFooter onClick={pushContact}>

                 <Email/>
                </ButtonFooter>
               
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
