import {  FaChevronCircleLeft, FaChevronCircleRight, FaReact} from "react-icons/fa";
import styled from "styled-components";




export const ProjectsContainer = styled.div`

width: 100%;

height: auto;
color: #fff;

display: flex;
justify-content: space-between;
margin-bottom:200px ;
flex-wrap: wrap;

@media screen and (max-width: 600px) {
  width: 100%;
}
`

export const BotonContainer = styled.div`
width: 20%;
height: 50vh;
background-color: black;
//border: solid 1px white;
position: relative;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


@media screen and (max-width: 600px) {
  height: 70vh;
}



`

export const LeftButton = styled.button`
background-color: transparent;
margin: 30px;
border: none;
border-radius: 50%;
cursor: pointer;

&:hover{
    color: #ffffff;
    box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea ;
     border: none;
  }



`
export const RightButton = styled.button`
background-color: transparent;
margin: 30px;

border-radius: 50%;
cursor: pointer;
z-index: 5;
border: none;

&:hover{
    color: #ffffff;
    box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea ;
     border: none;
  }
 `

 export const Left = styled(FaChevronCircleLeft)`
font-size: 3em;
 color: white;
 background-color: black;
 border-radius: 50%;
 transform: rotate(90deg);



 `
 export const Right= styled(FaChevronCircleRight)`
 font-size: 3em;
 color: white;
background-color: black;
 border-radius: 50%;
 transform: rotate(90deg);

 `;


export const BodySlide = styled.div`
width: 40%;
padding: 10px;
//border: solid 1px white;
transform: ${(props) => (props.toggle ? "translateX(0%)" : "translateX(-150%)")};
  transition: transform 0.5s ease-in-out;
@media screen and (max-width: 600px) {
  width: 80%;
}

`

export const Lista = styled.div`
width: 40%;
//border: solid 1px white;
@media screen and (max-width: 600px) {
  display: none;
}

`

export const UlLista = styled.ul`
padding: 20px 20%;

`

export const LiLista = styled.li`
color: #ffffff;
text-shadow: ${(props) => (props.i == props.color ? `0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea` : "#ffffff")};

margin-bottom: 20px;
list-style: none;
cursor: pointer;
`

export const Lista2 = styled.div`
display: none;
//border: solid 1px white;
@media screen and (max-width: 600px) {
  display: inline;

};
 `
export const LiLista2 = styled.li`
color: ${(props) => (props.i == props.color ? "#ffffff" : "ffffff")};
text-shadow: ${(props) => (props.i == props.color ? `0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea` : "#ffffff")};
list-style: none;
cursor: pointer;


`;

export const ReactIcon = styled(FaReact)`
color: #ffffff;
box-shadow: ${(props) => (props.i == props.color ? `0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea` : "#ffffff")};
margin-bottom: 30px;
margin-right: 10px;
border-radius: 50%;
`

export const DivList = styled.div`
color: #ffffff;

`



//**Fonts **//

export const Strong = styled.strong`



`
















































// export const BodySlideContainer = styled.div`
// width: 50%;
// @media screen and (max-width: 600px) {
//     width: 100%;
//     height: 50%;
//   }


// `

// export const BallContainer = styled.div`
// width: 100%;
// color: white;
// height: 50px;
// text-align: center;
// z-index: 50;


// `



