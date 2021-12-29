import styled from "styled-components";

export const Body = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 11%;
background-image: url('./assets/techdigi2.jpg');
&::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(255, 0, 0);
  mix-blend-mode: color-burn;
}
`