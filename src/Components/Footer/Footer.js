import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { contactEn, copyrightEn } from "../../translate/english";
import { contactEs, copyrightEs } from "../../translate/spanish";
import {
  AFooter,
  FooterContainer,
  FooterDiv,
  GitHub,
  Linkendin,
  WhatApp,
  FooterDiv2,
  Copyright,
  Email,
  ButtonFooter,
} from "./FooterStyles";
import { captchaErrorAction } from "../../redux/captcha/captchaActions";
import { changeEmailAction } from "../../redux/whatsappEmail/whatsappEmailActions";

function Footer() {
  const language = useSelector((state) => state.language.english);
  const stateEmail = useSelector((state) => state.email.email);
  const history = useHistory();
  const dispatch = useDispatch();
  const pushContact = () => {
    dispatch(captchaErrorAction(false));
    if (stateEmail) {
      dispatch(changeEmailAction());
    }
    history.push("/contact");
  };

  return (
    <FooterContainer>
      <FooterDiv>
        <AFooter href={language ? contactEn : contactEs} target="_blank">
          <WhatApp />
        </AFooter>

        <AFooter href="https://github.com/cristian-daniel88" target="_blank">
          <GitHub />
        </AFooter>

        <AFooter
          href="https://www.linkedin.com/in/cristian-daniel-herrera-7a2794a9/"
          target="_blank"
        >
          <Linkendin />
        </AFooter>

        <ButtonFooter onClick={pushContact}>
          <Email />
        </ButtonFooter>
      </FooterDiv>

      <FooterDiv2>
        <Copyright>&#169; {language ? copyrightEn : copyrightEs}</Copyright>
      </FooterDiv2>
    </FooterContainer>
  );
}

export default Footer;
