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
import { captchaErrorAction } from "../../redux/captcha/captchaActions";
import { changeDoneAction } from "../../redux/done/doneActions";
import Done from "../Done/Done";
import { changeSubmitAction } from "../../redux/pressSubmit/pressSubmitActions";
const axios = require('axios');

function FormContactEn() {
  const captcha = useRef(null);
  const dispatch = useDispatch();
  const captchaError = useSelector(state => state.captcha.error);
  const done = useSelector(state => state.done.done);
  const submit = useSelector(state => state.submit.submit);
  console.log(submit);



  const [emailI, setEmailI] = useState("");
  const [emailII, setEmailII] = useState("");
  const [spanEmail, setSpanEmail] = useState("");
  const [spanEmail2, setSpanEmail2] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");


  const submitEmail = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(emailI)) {
      return setSpanEmail("invalid");
    }
    
    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("invalid");
    }
    
    if (emailI !== emailII) {
      setSpanEmail2("please check your email address");
      setSpanEmail("please check your email address");
      
      return;
    }
    
    setSpanEmail2("");
    setSpanEmail("");
    
    if (captcha.current.getValue() === '') {
      return dispatch(captchaErrorAction(true))
    }
    
    
    
    dispatch(changeSubmitAction())

    dispatch(captchaErrorAction(false));

    // axios
    const data = {
      email: emailI,
      subject: subject,
      text: body
    
    };

    const config = {
      method: 'put',
      url: 'https://cristianherreradevapi.herokuapp.com/api/emails',
      headers: { },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      dispatch(changeDoneAction());
      //console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
      
    //


    setTimeout(() => {
      dispatch(changeDoneAction());
      dispatch(changeSubmitAction())
    }, 3000);

    setSubject('')
    setBody('')

    return
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

  
  const handleInputSubject = (e) => {
    setSubject(e.target.value);
  };

  
  const handleInputBody = (e) => {
    setBody(e.target.value);
  };

  const onBlurEmailI = () => {
    if (!/^\S+@\S+\.\S+$/.test(emailI)) {
      return setSpanEmail("invalid");
    }
    setSpanEmail("");
  };

  const onBlurEmailII = () => {
    if (!/^\S+@\S+\.\S+$/.test(emailII)) {
      return setSpanEmail2("invalid");
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

      {
        done 
        ? 
        (<Done/>)
        :
        (
          <FormContact
          onSubmit={(e) => {
            submitEmail(e);
          }}
        >
          <InputContainer>
            <EmailLabel>
             Your email address: <EmailSpan>{spanEmail}</EmailSpan>
            </EmailLabel>
  
            <EmailInput
              onChange={handleInputEmailI}
              value={emailI}
              onBlur={onBlurEmailI}
              onClick={cleanErrorWithClickI }
              placeholder="Your email address. Eg. example@example.com"
              type='email'
            />
          </InputContainer>
  
          <InputContainer>
            <EmailLabel>
              Repeat your email address: <EmailSpan>{spanEmail2}</EmailSpan>
            </EmailLabel>
  
            <EmailInput
              onChange={handleInputEmailII}
              value={emailII}
              onBlur={onBlurEmailII}
              onClick={cleanErrorWithClickII }
              placeholder="Please, repeat your email address again."
              type="email"
            />
          </InputContainer>
  
          <InputContainer>
            <EmailLabel>Subject:</EmailLabel>
            <EmailInput 
             onChange={handleInputSubject}
             value={subject}
             placeholder="Write a subject (optional)."
            />
          </InputContainer>
  
          <InputContainer>
            <EmailLabel></EmailLabel>
            <EmailTextArea 
            onChange={handleInputBody}
            value={body}
            placeholder="Write a message."
            />
          </InputContainer>
  
          <InputContainer>
            <EmailSpan style={{ marginTop: "20px", fontSize: "1.5em" }}>
              {captchaError && 'Captcha Error'}
              
            </EmailSpan>
            <RecaptchaEmail>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6Ld4XP8dAAAAAEv6mKPZpk_iKqHTIMXTUy3D6eym"
                onChange={onChange}
              />
            </RecaptchaEmail>
          </InputContainer>
  
          <InputContainer>
            <EmailButton disabled={submit}>Send</EmailButton>
          </InputContainer>
        </FormContact>
        )

      }
     
    </ContactContainer>
  );
}

export default FormContactEn;
