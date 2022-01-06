import React from 'react'
import { ContactContainer, EmailButton, EmailInput, EmailLabel, EmailSpan, EmailTextArea, FormContact, InputContainer } from './ContactBodyStyles'

const submitEmail = (e) => {
  e.preventDefault()
}

function ContactBody() {
    return (
        <ContactContainer>
            <FormContact onSubmit={(e)=> {submitEmail(e)}}>
                <InputContainer>
                
                <EmailLabel>Email:</EmailLabel>
                <EmailSpan>Email no coicide</EmailSpan>
                <EmailInput/>

                </InputContainer>

                <InputContainer>
                
                <EmailLabel>Repeat email:</EmailLabel>
                <EmailSpan>Email no coicide</EmailSpan>
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
                    Submit
                </EmailButton>
                </InputContainer>
            </FormContact>
        </ContactContainer>
    )
}

export default ContactBody
