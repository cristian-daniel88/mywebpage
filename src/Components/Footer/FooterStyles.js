import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";


export const FooterContainer = styled.footer`
color: black;
position: relative;
background: black;
width: 100%;
height: 25vh


`



export const FooterDiv = styled.div`
width: 95%;
margin: auto;

display: flex;
justify-content: space-around;
flex-wrap: wrap;
border-top: solid 1px #ffffff;
padding-top: 1%;


`

export const ButtonFooter = styled.button`
background: transparent;
border: none;
min-width: 150px;
margin-bottom: 3%;

&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }     

`

export const AFooter =styled.a`
color: #ffffff;



`



export const WhatApp = styled(FaWhatsapp)`

`;



export const Linkendin = styled(FaLinkedin)`

`;



export const GitHub = styled(FaGithub)`

`




