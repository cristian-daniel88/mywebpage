import React from "react";
import { useSelector } from "react-redux";
import { boldEn1, boldEn5, downloadCvEn, h4En1, h4En2, h4En3, h4En4, h4En5, pEn10, pEn11, pEn4, pEn5, pEn6, pEn8, pEn9 } from "../../translate/english";
import { boldEs1, boldEs5, downloadCvEs, h4Es1, h4Es2, h4Es3, h4Es4, h4Es5, pEs10, pEs11, pEs4, pEs5, pEs6, pEs8, pEs9 } from "../../translate/spanish";
import {
  A,
  Bold,
  BoxProfile,
  Download,
  DownloadButton,
  H4,
  Li,
  P,
  ProfileContainer,
  ProfileFather,
  Ul,
} from "./ProfileBodyStyles";

function ProfileBody() {
  const language = useSelector(state => state.language.english)
  return (
    <ProfileContainer>
      <ProfileFather>
        <BoxProfile>
          <H4>{language ? h4En1 : h4Es1}</H4>
          <br />

          <Bold>{language ? boldEn1 : boldEs1}</Bold>
          <P>Cristian Daniel Herrera</P>
          <br />
          <br />
          <Bold>Email: </Bold>
          <P>cristian.daniel.herrera@hotmail.com</P>
          <br />
          <br />
          <Bold>Linkedin: </Bold>
          <A
            href="https://ar.linkedin.com/in/cristian-daniel-herrera-7a2794a9"
            target="_blank"
          >
            {language ? pEn4 : pEs4}
          </A>
          <br />
          <br />
          <Bold>GitHub: </Bold>
          <A href="https://github.com/cristian-daniel88" target="_blank">
          {language ? pEn4 : pEs4}
          </A>
          <br />
          <br />
          <br />
          <H4>{language ? h4En2 : h4Es2}</H4>
          <br />
          <P>
            {language ? pEn5 : pEs5}
          </P>
          <br />
          <br />
          <br />
         
          <H4>{language ? h4En3 : h4Es3}</H4>
          <br/>
          <P>
              {language ? pEn6 : pEs6}
          </P>
          <br/>
          <br/>
          <Bold>{language ? boldEn5 : boldEs5}</Bold><A href="https://drive.google.com/file/d/1-U_VUpv24BlGHmunJ5DkQY6Mis9OaMLF/view"> {language ? pEn4 : pEs4}</A>

          <br />
          <br />
          <br />

        </BoxProfile>

        <BoxProfile>
          <H4>{language ? h4En4 : h4Es4}</H4>
          <br />
          <Ul style={{'padding': '0 10%'}}>
            <Li>
              {language ? pEn8 : pEs8}
            </Li>
            <br />
            <Li>
            {language ? pEn9 : pEs9}
            </Li>
            <br />
            <Li>
            {language ? pEn10 : pEs10}
            </Li>
            <br />
            <Li>
            {language ? pEn11 : pEs11}
            </Li>
          </Ul>
          <br />
          <br />
          <br />

          <H4>{language ? h4En5 : h4Es5} </H4>
          <br />
          <Ul>
            <Li>HTML</Li>
            <Li>CSS</Li>
            <Li>Javascript</Li>
            <Li>React</Li>
            <Li>NodeJs</Li>
            <Li>Git</Li>
            <Li>MongoDb</Li>
            <Li>SQL</Li>
            <Li>Bootstrap</Li>
          </Ul>
          <br/>
          <br/>
          <br/>
          <DownloadButton>
            <Download href="/assets/r.pdf" download>
                {language ? downloadCvEn : downloadCvEs}
            </Download>
          </DownloadButton>
        </BoxProfile>
      </ProfileFather>
      <br />
    </ProfileContainer>
  );
}

export default ProfileBody;
