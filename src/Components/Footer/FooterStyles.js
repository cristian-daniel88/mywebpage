import { FaAmericanSignLanguageInterpreting, FaEnvelope, FaGithub,  FaLinkedinIn,  FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";


export const FooterContainer = styled.footer`
color: black;
position: relative;
background: black;
width: 100%;
height: auto;




`



export const FooterDiv = styled.div`
width: 95%;
margin: auto;

display: flex;
justify-content: center;
flex-wrap: wrap;
border-top: solid 1px #ffffff;
padding-top: 30px;





`

export const ButtonFooter = styled.button`
background: transparent;
border: none;

margin-bottom: 20px;



 

`

export const AFooter =styled.a`
color: #ffffff;
margin-bottom: 20px;





 



`
export const WhatApp = styled(FaWhatsapp)`
border-radius: 50%;
font-size: 2em;
background: green;
margin: 0 20px;
&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }  
`;



export const Linkendin = styled(FaLinkedinIn)`
font-size: 2em;
margin: 0 20px;
background: #0077B5;
border-radius: 2px;
border: none;
color: white;

&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }  

`;



export const GitHub = styled(FaGithub)`
font-size: 2em;
margin: 0 20px;
border-radius: 50%;

&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }  
`



export const Email = styled(FaEnvelope)`
color: white;
font-size: 2em;
margin: 0 20px;
cursor: pointer;


&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
}
`


export const FooterDiv2 = styled.div`
width: 95%;
margin: auto;

display: flex;
justify-content: center;
flex-wrap: wrap;
color: white;
padding-bottom: 50px;


`

export const Copyright = styled.p`
text-align: center;
user-select: text;
`




