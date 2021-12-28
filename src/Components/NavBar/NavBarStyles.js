import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

export const NavBarContainer = styled.nav`
width: 100%;
background-color: black;
color: #fff;
padding: 1% 7%;
display: flex;
position: fixed;

`
// Profile

export const Profile = styled.div`
width: 50%;
/* border: solid 1px white; */
display: flex;
cursor: pointer;


`
export const PhotoContainer = styled.div`
border-radius: 50%;
width: 70px;
height: 70px;
background-image: url('./assets/foto-cv.jpg');
background-position: center;
background-size: cover;
border: solid 4px white;


`

export const Details = styled.div`
width: 100%;
padding: 0 1% 0 4%;

`

export const Name = styled.h1`
margin-bottom: 3%;
cursor: pointer;

`

export const Position = styled.div`
display: flex;
justify-content: space-between;

`



export const H2 = styled.h2`
font-weight: 200;
`

export const MenuBurguer = styled(FaBars)`
font-size: x-large;
cursor: pointer;

`

// Nav


export const Nav = styled.div`
width: 50%;
border: solid 1px white;


`

export const NavUl = styled.ul`
display: flex;
justify-content: center;
margin-bottom: 4%;
`
export const NavLi = styled.li`
list-style: none;
margin: 0 1%;
cursor: pointer;
`

export const TranslateContainer = styled.div`

`

export const ButtonTranslate = styled.button`
cursor: pointer;

`