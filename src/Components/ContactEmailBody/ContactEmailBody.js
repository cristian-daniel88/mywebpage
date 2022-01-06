import React, { useRef} from "react";
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
//https://developers.google.com/recaptcha/intro


function ContactEmailBody() {
    const captcha = useRef(null);
   
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
          <EmailLabel htmlFor="emailI">
            Email: <EmailSpan>Email no coicide</EmailSpan>
          </EmailLabel>
          <EmailInput 
          type='email'
          id="emailI"
          name="emailI"
          placeholder="Your email"
          />
        </InputContainer>

        <InputContainer>
          <EmailLabel htmlFor="emailII">
            Repeat email: <EmailSpan>Email no coicide</EmailSpan>
          </EmailLabel>
          <EmailInput 
          type='email'
          id="emailII"
          name="emailII"
          placeholder="Repeat your email please"
          />
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
