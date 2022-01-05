import {  FaChevronCircleLeft, FaChevronCircleRight, FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";


export const ProjectsContainer = styled.section`
background-image: url('/assets/techdigi3.jpg');


`

export const ProjectsFather = styled.div`
width: 90%;
margin: auto;

height: 100vh;
`

export const SlideContainer = styled.div`
width: 50%;
height: 70%;
border: solid 1px white;
margin: auto;
@media screen and (max-width: 600px) {
    width: 100%;
  }

`

export const SlideFather = styled.div`
width: 100%;
height: 80%;
border: solid 1px white;
display: flex;

`
export const ButtonContainerSlide = styled.div`
width: 15%;
height: 100%;
border: solid 1px white;
display: flex;
align-items: center;
justify-content: center;
`

export const ButtonSlider = styled.button`
background-color: transparent;
border: none;
color: white;
cursor: pointer;



`

export const LeftButtonSlider = styled(FaChevronCircleLeft)`
font-size: 2em;

`

export const RightButtonSlider = styled(FaChevronCircleRight)`
font-size: 2em;

`

export const BodySlider = styled.div`
width: 70%;
height: 100%;
border: solid 1px white;

`

export const BalsContainer = styled.div`
width: 100%;
border: solid 1px white;
height: 20%;
background-color: green;
`

