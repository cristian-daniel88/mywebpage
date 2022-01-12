import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Menu = styled.div`

width: 70%;
height: 100vh;
background-color: rgb(16 3 3 / 80%);
position: fixed;
z-index: 11;

transform: ${(props) => (props.toggle ? "translateX(0%)" : "translateX(-150%)")};
  transition: transform 0.6s ease-in-out;

@media screen and (min-width: 600px) {
    display: none;
  }

` ;



export const MenuContainer = styled.div`
height: 100%;
width: 100%;

`

export const NavBurguer = styled.nav`
height: 100%;
display: flex;


`;

export const UlBurguer = styled.ul`
width: 80%;
display: flex;
justify-content: center;
flex-direction: column;
height: 100%;

`;

export const LiBurguer = styled.li`
color: white;
display: block;
margin: 20px;


`;

export  const ButtonBurguerContainer = styled.div`
width: 20%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-end;
color: white;
`;

export const ButtonBurguer = styled(FaBars)`
color: white;
font-size: 2em;
transform: rotate(90deg);
margin: 5px;
cursor: pointer;
transform: ${(props) => (props.toggle === 'true' ? "rotate(90%)" : "translateX(0%)")};
transition: ${(props) => (props.toggle === 'true' ? "transform 1s ease-in-out" : "transform 1s cubic-bezier(.94,-0.05,1,1)")};
`;
export const DetailsLanguage = styled.details`

`


export const SummaryLanguage = styled.summary`
margin-bottom: 15px;
font-size : 1.3rem;
cursor: pointer;
&:hover, &:focus{
    color: #ffffff;
    text-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  }
`

export const ButtonMenuLanguage = styled.button`
  background-color: transparent;
  
  cursor: ${(props) => (props.switch ? "" : "pointer")};
 
  border: none;
  padding: 1px 3px;
  color: #fff;
  margin: 10px 5px;
 

  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.switch ? ".3" : "1")};

  &:hover{
    color: #ffffff;
    text-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  }             


`

export const ButtonMenu = styled.button`
border: none;
background-color: transparent;
color: #fff;
font-size: 1.3rem;
cursor: pointer;
&:hover, &:focus{
    color: #ffffff;
    text-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  }
`


































// .css-square {
//   width: 100px;
//   height: 100px;
//   background-color: #111;
//   transform:rotate(45deg);
 
//   transition: transform .8s ease-in-out;  
// }




