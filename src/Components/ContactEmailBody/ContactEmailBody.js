import React, { useRef, useState } from "react";
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
    const [submitOk, setSubmitOk] = useState(false);
    const [emailI, setEmailI] = useState('');
    const [emailII, setEmailII] = useState('');
    const [spanEmail, setSpanEmail] = useState("");
    const [spanEmail2, setSpanEmail2] = useState("");
    const [captchaState, setCaptchaState] = useState('')
   

 
    const submitEmail = (e) => {
        e.preventDefault();

        setCaptchaState('');

        if(!/^\S+@\S+\.\S+$/.test(emailI)) {
            
            return setSpanEmail("It's not a email.")
       } 

       if(!/^\S+@\S+\.\S+$/.test(emailII)) {
                    
        return   setSpanEmail2("It's not a email.")
       } 

        if(emailI !== emailII) {
            setSpanEmail2('not the same email adress');
            setSpanEmail('not the same email adress');

          return
        }

        setSpanEmail2('');
        setSpanEmail('');
        if(!submitOk) {
            setCaptchaState('captcha error');
            return
        }

        return
        
      };

    const onChange = () => {
        if(captcha.current.getValue()) {
          return   setSubmitOk(true)
        }

        setSubmitOk(false)
    }

    const handleInputEmailI = (e) => {
        setEmailI(e.target.value)
    }

    const handleInputEmailII = (e) => {
        setEmailII(e.target.value)
    }
    
    const onBlurEmailI = () => {
        setCaptchaState('');
        if(!/^\S+@\S+\.\S+$/.test(emailI)) {
            
             return setSpanEmail("It's not a email.")
        } 

        setSpanEmail('')     

    }

    const onBlurEmailII = ()=> {
        setCaptchaState('');
        if(!/^\S+@\S+\.\S+$/.test(emailII)) {
                    
            return   setSpanEmail2("It's not a email.")
       } 

       setSpanEmail2('');

    
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
            Email: <EmailSpan>{spanEmail}</EmailSpan>
          </EmailLabel>

          <EmailInput 
          onChange={handleInputEmailI}
          value={emailI}
          onBlur={onBlurEmailI}
          />
        </InputContainer>

        <InputContainer>
          <EmailLabel>
            Repeat email: <EmailSpan>{spanEmail2}</EmailSpan>
          </EmailLabel>

          <EmailInput 
           onChange={handleInputEmailII}
           value={emailII}
           onBlur={onBlurEmailII}
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
              <EmailSpan style={{'marginTop': '20px'}}>{captchaState}</EmailSpan>
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
