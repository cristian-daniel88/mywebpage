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
flex-wrap: wrap;

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

color: lightblue;
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
width: 50%;
height: auto;
/* border: solid 1px white; */
min-width: 265px;
display: ${(props)=> (props.load ? 'none' : 'block' ) };
`;













