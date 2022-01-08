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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { captchaAction, captchaErrorAction } from "../../redux/captcha/captchaActions";
import { changeDoneAction } from "../../redux/done/doneActions";
const axios = require('axios');

function FormContactEn() {
  const captcha = useRef(null);
  const dispatch = useDispatch();
  const captchaError = useSelector(state => state.captcha.error);



  const [emailI, setEmailI] = useState("");
  const [emailII, setEmailII] = useState("");
  const [spanEmail, setSpanEmail] = useState("");
  const [spanEmail2, setSpanEmail2] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");


  


  const submitEmail = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(emailI)) {
      return setSpanEmail("correo no valido");
    }

    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("correo no valido");
    }

    if (emailI !== emailII) {
      setSpanEmail2("los correos no coinciden");
      setSpanEmail("los correos no coinciden");

      return;
    }

    setSpanEmail2("");
    setSpanEmail("");

    if (captcha.current.getValue() === '') {
      return dispatch(captchaErrorAction(true))
    }

  


    dispatch(captchaErrorAction(false));

    // axios
    
    const data = {
      email: emailI,
      subject: subject,
      text: body
    
    };

    const config = {
      method: 'post',
      url: 'https://cristianherreradevapi.herokuapp.com/api/emails',
      headers: { },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      dispatch(changeDoneAction());
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
    //


    setTimeout(() => {
      dispatch(changeDoneAction());
    }, 3000);

    
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
      return setSpanEmail("no es un correo valido");
    }
    setSpanEmail("");
  };

  const onBlurEmailII = () => {
    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("no es un correo valido");
    }
    setSpanEmail2("");
  };

  const handleInputSubject = (e) => {
    setSubject(e.target.value);
  };

  
  const handleInputBody = (e) => {
    setBody(e.target.value);
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
            Correo Electronico: <EmailSpan>{spanEmail}</EmailSpan>
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
            Repeti tu correo electronico: <EmailSpan>{spanEmail2}</EmailSpan>
          </EmailLabel>

          <EmailInput
            onChange={handleInputEmailII}
            value={emailII}
            onBlur={onBlurEmailII}
            onClick={cleanErrorWithClickII }
          />
        </InputContainer>

        <InputContainer>
          <EmailLabel>Asunto: </EmailLabel>
          <EmailInput 
          onChange={handleInputSubject}
          value={subject}
          />
        </InputContainer>

        <InputContainer>
          <EmailLabel></EmailLabel>
          <EmailTextArea 
          onChange={handleInputBody}
          value={body}
          />
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
