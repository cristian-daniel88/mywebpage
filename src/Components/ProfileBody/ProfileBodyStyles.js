import styled from "styled-components";

export const ProfileContainer = styled.section`
width: 100%;
height: auto;
background-image: url('/assets/techdigi3.jpg');
color: #ffffff;

`

export const ProfileFather =  styled.div`
width: 90%;
height: auto;
margin: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;

`

export const BoxProfile = styled.div`
/* border: solid 1px white; */
width: 48%;
height: 90%;
min-width: 280px;


`

export const H4 = styled.h4`
text-align: center;
user-select: text;


`

export const Bold = styled.strong`
user-select: text;
`

export const P = styled.p`
display: inline-block;
user-select: text;
`

export const A = styled.a`

display: inline-block;
color: lightblue;


&:hover , &:focus {
    color: #ffffff;
   
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }
`

export const Ul = styled.ul`

padding: 0 20%;

`

export const Li = styled.li`
user-select: text;
`
