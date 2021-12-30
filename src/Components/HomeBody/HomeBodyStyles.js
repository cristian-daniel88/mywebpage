import styled from "styled-components";

export const Body = styled.div`
width: 100%;
height: 150vh;
position: absolute;
top: 5%;
background-image: url('./assets/techdigi3.jpg'); 
background-color: black;

@media only screen and (max-width: 811px) and (min-width: 809px)  {
  top: -10%;
}

@media only screen and (max-width: 801px) and (min-width: 799px)  {
  top: -10%;
}
`;

export const Loading = styled.div`
display: ${(props) => (props.load ? "block" : "none")};
`

export const BodyContainer = styled.div`
display: ${(props) => (!props.load ? "block" : "none")};
width: 90%;
margin: auto;
display: flex;
flex-direction: row-reverse;
position: absolute;
top: 5%;
right: 0;
left: 0;
flex-wrap: wrap-reverse;
@media screen and (max-width: 900px) {
    
    top: 20%;
  }
  @media screen and (max-width: 600px) {
    
    top: 10%;
  }
`

// Box 1
export const Box1 = styled.div`
width: 50%;
height: auto;
/* border: solid 1px white; */
display: flex;
justify-content: center;
align-items: center;
display: ${(props)=> (props.load ? 'none' : 'block' ) };


@media screen and (max-width: 900px) {
    
    width: 100%;
  }
`;

export const ComputerContainer = styled.div`
width: 95%;
height: auto;

position: relative;
z-index: 10;
@media screen and (max-width: 376px) {
   width: 90%;
  }
@media only screen and (max-width: 541px) and (min-width: 539px)  {
  width: 500px;
}
`;

export const Computer = styled.img`
width: 95%;
filter: invert(0.9);
z-index: 20;
position: relative;
@media screen and (max-width: 376px) {
    width: 112%;
    
  }
`

export const TextComputer= styled.div`
position: absolute;
color: white;
border: solid 1px white;
font-size: 90%;
width: 65%;
height: 38%;
top: 15%;
left: 15%;
background-color: black;
padding: 3%;

@media screen and (max-width: 376px) {
    width: 80%;
    font-size: 11px;
  }
  @media only screen and (max-width: 384px) and (min-width: 384px)  {
  font-size: 10px;
}
@media only screen and (max-width: 391px) and (min-width: 390px)  {
  font-size: 10px;
}
`
export const Parrafo = styled.p`
border-right: ${(props)=> (props.tapping ? '' : 'none' )} ;
color: #abf40b;
`

export const TouchPad = styled.div`
width: 70%;
height: 25%;
position: absolute;
background-color: black;
top: 62%;
right: 18%;
`

// Box 2
export const Box2 = styled.div`
display: ${(props) => (!props.load ? "flex" : "none")};
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
height: auto;

min-width: 265px;
@media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const HiThereDiv = styled.div`
width: 90%;
margin-bottom: 10%;
`

export const HiThereH3 = styled.h3`
text-align: center;
color: #fff;
font-size: 200%;
`

export const HireMeDiv = styled.div`
width: auto;
text-align: center;
`

export const HireMeButton = styled.button`
border: none;
background-color: transparent;
color: #fff;
cursor: pointer;
background: #500779;
border-radius: 5px;
padding: 8px 10px;
font-size: 150%;
border: solid 1px grey;
&:hover , &:focus {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }
`
