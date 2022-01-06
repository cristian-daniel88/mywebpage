import React, { useRef } from "react";
import {
  ContactContainer,
  EmailButton,
  EmailInput,
  EmailLabel,
  EmailSpan,
  EmailTextArea,
  FormContact,
  InputContainer,
  RecaptchaEmail,
} from "./ContactEmailBodyStyles";
import ReCAPTCHA from "react-google-recaptcha";


function ContactEmailBody() {
    const captcha = useRef(null )
 
    const submitEmail = (e) => {
        e.preventDefault();
      };

    const onChange = () => {
        if(captcha.current.getValue()) {
            console.log('no robot')
        }
    }
      

  return (
    <ContactContainer>
      <FormContact
        onSubmit={(e) => {
          submitEmail(e);
        }}
      >
        <InputContainer>
          <EmailLabel>
            Email: <EmailSpan>Email no coicide</EmailSpan>
          </EmailLabel>

          <EmailInput />
        </InputContainer>

        <InputContainer>
          <EmailLabel>
            Repeat email: <EmailSpan>Email no coicide</EmailSpan>
          </EmailLabel>

          <EmailInput />
        </InputContainer>

        <InputContainer>
          <EmailLabel>Asunto:</EmailLabel>
          <EmailInput />
        </InputContainer>

        <InputContainer>
          <EmailLabel>Body: </EmailLabel>
          <EmailTextArea />
        </InputContainer>

        <InputContainer>
          <RecaptchaEmail>
            <ReCAPTCHA 
            ref={captcha}
            sitekey="6LddiPYdAAAAAFgzPcvmCQHo_zqmzkH4AmKK9Ny-"
            onChange={onChange} />
          </RecaptchaEmail>
        </InputContainer>

        <InputContainer>
          <EmailButton>Send</EmailButton>
        </InputContainer>
      </FormContact>
    </ContactContainer>
  );
}

export default ContactEmailBody;
