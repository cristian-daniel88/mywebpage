import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Menu = styled.div`
display: ${(props) => (props.toggle ? "block" : "none")};
width: 70%;
height: 100vh;
background-color: rgb(16 3 3 / 80%);
position: absolute;
z-index: 11;

@media screen and (min-width: 600px) {
    display: none;
  }

` ;



export const MenuContainer = styled.div`
height: 100%;
width: 100%;
border: solid 1px white;
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

`;



