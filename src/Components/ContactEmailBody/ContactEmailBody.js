import React from 'react'
import { ContactContainer, EmailButton, EmailInput, EmailLabel, EmailSpan, EmailTextArea, FormContact, InputContainer } from './ContactEmailBodyStyles'

const submitEmail = (e) => {
  e.preventDefault()
}

function ContactEmailBody() {
    return (
        <ContactContainer>
            <FormContact onSubmit={(e)=> {submitEmail(e)}}>
                <InputContainer>
                
                <EmailLabel>Email: <EmailSpan>Email no coicide</EmailSpan></EmailLabel>
                            
                <EmailInput/>

                </InputContainer>

                <InputContainer>
                
                <EmailLabel>Repeat email: <EmailSpan>Email no coicide</EmailSpan></EmailLabel>
    
                <EmailInput/>

                </InputContainer>

                <InputContainer>
                <EmailLabel>Asunto:</EmailLabel>
                <EmailInput/>
                </InputContainer>

                <InputContainer>
                <EmailLabel>Body: </EmailLabel>
                <EmailTextArea/>
                </InputContainer>


                <InputContainer>
                <EmailButton>
                    Send
                </EmailButton>
                </InputContainer>
            </FormContact>
        </ContactContainer>
    )
}

export default ContactEmailBody
