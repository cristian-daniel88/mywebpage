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
//https://developers.google.com/recaptcha/intro

function FormContactEs() {
  const captcha = useRef(null);

  const [emailI, setEmailI] = useState("");
  const [emailII, setEmailII] = useState("");
  const [spanEmail, setSpanEmail] = useState("");
  const [spanEmail2, setSpanEmail2] = useState("");

  const submitEmail = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(emailI)) {
      return setSpanEmail("No es una casilla de correo");
    }

    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("No es una casilla de correo");
    }

    if (emailI !== emailII) {
      setSpanEmail2("los correos no coinciden");
      setSpanEmail("los correos no coinciden");

      return;
    }

    setSpanEmail2("");
    setSpanEmail("");

    return;
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      return;
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
      return setSpanEmail("No es un correo válido");
    }
    setSpanEmail("");
  };

  const onBlurEmailII = () => {
    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("No es un correo válido");
    }
    setSpanEmail2("");
  };

  const cleanErrorWithClickI = () => {
    setSpanEmail("");
    return
  };

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
            onClick={cleanErrorWithClickI}
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
            onClick={cleanErrorWithClickII}
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
            {""}
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

export default FormContactEs;
