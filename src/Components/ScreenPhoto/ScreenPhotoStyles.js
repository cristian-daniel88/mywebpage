import styled from "styled-components";
import {  IoIosCloseCircle } from "react-icons/io";

export const ScreenContainer = styled.div`

height: 100vh;
width: 100%;
background-color: rgba(0 ,0 ,0 , .8);

position: absolute;
z-index: 60000;
top: 0%;

display: ${(props) => (props.sacar ? "flex" : "none")};
justify-content: center;
align-items: center;


`

export const ScreenMarco = styled.div`
height: auto;
width: 30%;
border: solid 4px white;
background-color: black;
position: relative;

@media screen and (max-width: 600px) {
    width: 60%;
  }



`

export const ContainerIcon = styled.div`
width: 100%;
display: flex;
justify-content: end;
padding: 5px;
cursor: pointer;

`

export const CloseIcon = styled(IoIosCloseCircle)`
color: white;
font-size: 4em;

`

export const ImagenCv = styled.img`
width: 100%;
z-index: 900000;

`