import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";


export const WhatsAppOrEmailContainer = styled.div`
height: 100vh;
width: 100%;
background-image: url('./assets/techdigi3.jpg');
padding-bottom: 200px;
color: white;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 600px) {
    padding-bottom: 0;
    flex-direction: column;
   
  }
`

export const WhatsAppOrEmailBotones = styled.button`
border: none;
background-color: transparent;
color: #fff;
cursor: pointer;
background: #500779;
border-radius: 5px;
padding: 8px 10px;
font-size: 2em;
border: solid 1px grey;
margin: 0 5%;
display: flex;
justify-content: center;
&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }

  @media screen and (max-width: 600px) {
    
    width: 90%;
    
   
  }



`


export const WhatsAppOrEmailA = styled.a`
border: none;
background-color: transparent;
color: #fff;
cursor: pointer;
background: #500779;
border-radius: 5px;
padding: 8px 10px;
font-size: 2em;
border: solid 1px grey;
margin: 0 5%;
display: flex;
justify-content: center;
&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }


  @media screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 100px;
   
  }



`


export const EmailContact = styled(FaEnvelope)`
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



export const WhatAppContact = styled(FaWhatsapp)`
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
