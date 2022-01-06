import styled from "styled-components";

export const ContactContainer = styled.section`
height: 100vh;
width: 100%;
background-image: url('./assets/techdigi3.jpg'); 

`

export const FormContact = styled.form`
width: 25%;
margin: auto;
height: 80%;
color: #ffffff;

display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
border-radius: 5px;
border: solid 1px #ffffff;

@media screen and (max-width: 600px) {
    width: 90%;
  }
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;

`

export const EmailLabel = styled.label`
margin-bottom: 15px;
width: 99%;
margin: auto;
`


export const EmailInput = styled.input`
width: 99%;
margin: auto;
`

export const EmailButton = styled.button`
border: none;
background-color: transparent;
color: #fff;
cursor: pointer;
background: #500779;
border-radius: 5px;
padding: 8px 10px;
font-size: 100%;
border: solid 1px grey;
width: 50%;
margin: auto;
margin-top: 30px;
&:hover  {
    color: #ffffff;
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }

`

export const EmailTextArea = styled.textarea`

width: 99%;
margin: auto;
height: 300px;
resize: none;


`

export const EmailSpan = styled.span`
color: red;
text-align: center;
font-size: .8em;

`