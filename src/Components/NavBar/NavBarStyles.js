import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const NavBarContainer = styled.header`
  width: 100%;
  background-color: black;
  color: #fff;
  padding: 5px 2%;
  display: flex;
  position: fixed;
  flex-wrap: wrap;
  z-index: 100;

  @media screen and (max-width: 600px) {
    padding: 5px 1%;
  }
`;
// Profile

export const Profile = styled.div`
  width: 50%;

  display: flex;
  border-bottom: solid 1px white;
  padding-bottom: 5px;

  @media screen and (max-width: 900px) {
    width: 100%;
    border-bottom: none;
    padding-bottom: 5px;
    
  }

  @media screen and (max-width: 600px) {
     border-bottom: solid 1px white; 
     
  }
`;
export const PhotoContainer = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-image: url("./assets/foto-cv.jpg");
  background-position: center;
  background-size: cover;
  border: solid 4px white;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;

export const Details = styled.div`
  width: 100%;
  padding: 0 1% 0 4%;
`;

export const Name = styled.h1`
  margin-bottom: 3%;
  font-weight: 400;
  letter-spacing: 1px;
  user-select: text;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 100%;
  }
`;

export const Position = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  font-weight: 100;
  font-size: 100%;

  @media screen and (max-width: 600px) {
    font-size: 100%;
    margin-top: 5%;
  }
`;

export const MenuBurguer = styled(FaBars)`
  font-size: x-large;
  cursor: pointer;
  display: none;
  border: solid 0.5px white;
  border-radius: 3px;
  padding: 2px;
  @media screen and (max-width: 600px) {
    display: block;
    margin-top: 5%;
  }
`;

// Nav

export const Nav = styled.nav`
  width: 50%;
   border-bottom: solid 1px white; 

  min-width: 300px;
  padding-top: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
`;
export const NavLi = styled.li`
  list-style: none;
  margin: 0 1%;
  cursor: pointer;
  border: none; 

  &:focus {
    border: none;
  }
`;
export const NavLiDivI = styled.div`
  position: relative;
`;

export const NavLiDivII = styled.button                 `
  height: 25px;
  border: none;
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;  
  &:hover, &:focus{
    color: #ffffff;
    text-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  }
`;
export const NavLiDivIII = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  top: 25px;
  background: grey;
  border: solid 1px white;
  display: ${(props) => (props.hover ? "block" : "none")};

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    right: 50%;
    top: -23px;
  }

  &::after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid grey;
    right: 50%;
    top: -18px;
  }
`;

export const ButtonTranslateEn = styled.button`
  cursor: ${(props) => (props.switch ? "" : "pointer")};
  background-color: transparent;
  
  padding: 1px 3px;
  color: #fff;
  margin: 0 5px;
  width: 10%;

  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.switch ? ".3" : "1")};
`;
export const ButtonTranslateEs = styled.button`
  cursor: ${(props) => (!props.switch ? "" : "pointer")};
  background-color: transparent;
  padding: 1px 3px;
  color: #fff;
  margin: 0 5px;
  width: 10%;

  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (!props.switch ? ".3" : "1")};
`;
export const FlagEn = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("./assets/ukIdioma.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  

`;
export const FlagEs = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("./assets/spainIdioma.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;


