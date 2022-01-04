import React from "react";
import {
  A,
  Bold,
  BoxProfile,
  H4,
  Li,
  P,
  ProfileContainer,
  ProfileFather,
  Ul,
} from "./ProfileBodyStyles";

function ProfileBody() {
  return (
    <ProfileContainer>
      <ProfileFather>
        <BoxProfile>
          <H4>PERSONAL INFORMATION</H4>
          <br />

          <Bold>Full-Name: </Bold>
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
            Click here
          </A>
          <br />
          <br />
          <Bold>GitHub: </Bold>
          <A href="https://github.com/cristian-daniel88" target="_blank">
            Click here
          </A>
          <br />
          <br />
          <br />
          <H4>PROFILE</H4>
          <br />
          <P>
            After working as a professional musician for several years, I am now
            looking to start a new career as a Programmer and Web Developer. I
            am an enthusiastic person who is motivated and willing to learn new
            skills and work as part of a dedicated team. I have recently
            completed an introductory Programming course and am in the process
            of completing an Advanced Javascript course. I'm seeking a role
            where I can apply these newfound skills in a dynamic, practical way.
          </P>
          <br />
          <br />
          <br />
         
          <H4>WORK EXPERIENCE:</H4>
          <br/>
          <P>
            I was training at The Bit Cooperative Ltda for two years in Buenos
            Aires, Argentina. I learned how to use MERN stack to build an
            e-commerce web page. They offered me a position as a Junior, but
            unfortunately I couldn't accept because I was about to relocate to
            the UK
          </P>
          <br/>
          <br/>
          <Bold>Letter of recommendation: </Bold><A href="https://drive.google.com/file/d/1-U_VUpv24BlGHmunJ5DkQY6Mis9OaMLF/view">Click here</A>

          <br />
          <br />
          <br />

        </BoxProfile>

        <BoxProfile>
          <H4>EDUCATION</H4>
          <br />
          <Ul style={{'padding': '0 10%'}}>
            <Li>
              Web Development for Beginners (Layout and Starter Javascript
              course). May 2020 - August 2020, UTN
            </Li>
            <br />
            <Li>
              Advanced Web Development (Stack MERN). August 2020 – December
              2021, NucBA
            </Li>
            <br />
            <Li>Udemy (NodeJs). May 2021 - June 2021</Li>
            <br />
            <Li>
              IT Career (HTML, CSS, JavaScript, Testing, React, Nodejs,
              Postgresql, SQL, PHP, Python, C#, Java, Jquery. August 2021 -
              April 2022.
            </Li>
          </Ul>
          <br />
          <br />
          <br />

          <H4>LANGUAGES & FRAMEWORKS </H4>
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
        
        </BoxProfile>
      </ProfileFather>
      <br />
    </ProfileContainer>
  );
}

export default ProfileBody;
