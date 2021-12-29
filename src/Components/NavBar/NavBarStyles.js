import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

export const NavBarContainer = styled.nav`
width: 100%;
background-color: black;
color: #fff;
padding: 5px 7%;
display: flex;
position: fixed;
flex-wrap: wrap;
@media screen and (max-width: 600px) {
    padding: 5px 1%;

  }


`
// Profile

export const Profile = styled.div`
width: 50%;

display: flex;


@media screen and (max-width: 900px) {
  width: 100%;
  }


`
export const PhotoContainer = styled.div`
border-radius: 50%;
width: 60px;
height: 60px;
background-image: url('./assets/foto-cv.jpg');
background-position: center;
background-size: cover;
border: solid 4px white;
cursor: pointer;

@media screen and (max-width: 600px) {
  margin-top: 5px;
}
  




`







export const Details = styled.div`
width: 100%;
padding: 0 1% 0 4%;


`

export const Name = styled.h1`
margin-bottom: 3%;
font-weight: 400;
letter-spacing: 1px;
cursor: pointer;
@media screen and (max-width: 600px) {
  font-size: 100%;}
  




`

export const Position = styled.div`
display: flex;
justify-content: space-between;



`



export const H2 = styled.h2`
font-weight: 100;
font-size: 100%;

@media screen and (max-width: 600px) {
  font-size: 100%;
  margin-top: 5%;

  }

`

export const MenuBurguer = styled(FaBars)`
font-size: x-large;
cursor: pointer;
display: none;
border: solid .5px white;
border-radius: 3px;
padding: 2px;
@media screen and (max-width: 600px) {
  display: block;
  margin-top: 5%;

  }


`

// Nav


export const Nav = styled.div`
width: 50%;

min-width: 300px;
padding-top: 20px;
@media screen and (max-width: 900px) {
  width: 100%;

  }
  @media screen and (max-width: 600px) {
  display: none;

  }


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



export const ButtonTranslate = styled.button`
cursor: pointer;
background-color: transparent;

color:#fff ;
margin: 0 5px;
width: 10%;

display: flex;
justify-content: space-between;
`
export const Flag = styled.div`
width: 50%;
height: 100%;
background-image: url('./assets/ukIdioma.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat

`