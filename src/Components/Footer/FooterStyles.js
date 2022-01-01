import { FaGithub, FaLinkedin, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";


export const FooterContainer = styled.footer`
color: black;
position: relative;
background: black;
width: 100%;
height: 150px;




`



export const FooterDiv = styled.div`
width: 95%;
margin: auto;

display: flex;
justify-content: space-around;
flex-wrap: wrap;
border-top: solid 1px #ffffff;
padding-top: 50px;




`

export const ButtonFooter = styled.button`
background: transparent;
border: none;
min-width: 170px;
margin-bottom: 3%;
border:none;

 

`

export const AFooter =styled.a`
color: #ffffff;
font-size: clamp(0.8rem, 5vw, 0.8rem);
&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }     



`



export const WhatApp = styled(FaWhatsapp)`
border-radius: 50%;
font-size: 1.5em;
background: green;
`;



export const Linkendin = styled(FaLinkedinIn)`
font-size: 1.5em;
background: #0077B5;
border-radius: 2px;
border: none;
color: white;

`;



export const GitHub = styled(FaGithub)`
font-size: 1.5em;
`




