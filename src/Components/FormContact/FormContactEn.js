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
} from "./FormContacEnStyles";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { captchaAction, captchaErrorAction } from "../../redux/captcha/captchaActions";
//https://developers.google.com/recaptcha/intro

function FormContactEn() {
  const captcha = useRef(null);
  const dispatch = useDispatch();
  const captchaError = useSelector(state => state.captcha.error);



  const [emailI, setEmailI] = useState("");
  const [emailII, setEmailII] = useState("");
  const [spanEmail, setSpanEmail] = useState("");
  const [spanEmail2, setSpanEmail2] = useState("");

  


  const submitEmail = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(emailI)) {
      return setSpanEmail("It's not a email.");
    }

    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("It's not a email.");
    }

    if (emailI !== emailII) {
      setSpanEmail2("not the same email adress");
      setSpanEmail("not the same email adress");

      return;
    }

    setSpanEmail2("");
    setSpanEmail("");

    if (captcha.current.getValue() === '') {
      return dispatch(captchaErrorAction(true))
    }

  


    dispatch(captchaErrorAction(false));


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  };
  
  const onChange = () => {
    
    if (captcha.current.getValue()) {
     
     
    }
    
  };

  const handleInputEmailI = (e) => {
    setEmailI(e.target.value);
  };

  const handleInputEmailII = (e) => {
    setEmailII(e.target.value);
  };

  const onBlurEmailI = () => {
    if (!/^\S+@\S+\.\S+$/.test(emailI)) {
      return setSpanEmail("It's not a email.");
    }
    setSpanEmail("");
  };

  const onBlurEmailII = () => {
    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("It's not a email.");
    }
    setSpanEmail2("");
  };

  const cleanErrorWithClickI = () => {
    setSpanEmail("");
    return

  }

  const cleanErrorWithClickII = () => {
    setSpanEmail2("");
    return

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
            onClick={cleanErrorWithClickI }
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
            onClick={cleanErrorWithClickII }
          />
        </InputContainer>

        <InputContainer>
          <EmailLabel>Subject:</EmailLabel>
          <EmailInput />
        </InputContainer>

        <InputContainer>
          <EmailLabel></EmailLabel>
          <EmailTextArea />
        </InputContainer>

        <InputContainer>
          <EmailSpan style={{ marginTop: "20px", fontSize: "1.5em" }}>
            {captchaError && 'Captcha Error'}
            
          </EmailSpan>
          <RecaptchaEmail>
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LddiPYdAAAAAFgzPcvmCQHo_zqmzkH4AmKK9Ny-"
              onChange={onChange}
            />
          </RecaptchaEmail>
        </InputContainer>

        <InputContainer>
          <EmailButton>Send</EmailButton>
        </InputContainer>
      </FormContact>
    </ContactContainer>
  );
}

export default FormContactEn;
