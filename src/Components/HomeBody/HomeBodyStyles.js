import styled from "styled-components";

export const Body = styled.div`
width: 100%;
height: 150vh;
position: absolute;
top: 10%;

background-image: url('./assets/techdigi3.jpg'); 
background-color: black;


`;

export const Loading = styled.div`
display: ${(props) => (props.load ? "block" : "none")};



`

export const BodyContainer = styled.div`
display: ${(props) => (!props.load ? "block" : "none")};
width: 90%;
margin: auto;
display: flex;
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
/* border: solid 1px white; */
position: relative;
z-index: 10;

`;

export const Computer = styled.img`
width: 95%;
filter: invert(0.9);
z-index: 20;
position: relative;


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
border: solid 1px white;
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
font-size: 150%;

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
padding: 8px 3px;


&:hover , &:focus {
    color: #ffffff;
    

      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }
`













