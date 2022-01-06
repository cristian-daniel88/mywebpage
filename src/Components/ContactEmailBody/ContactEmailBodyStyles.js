import styled from "styled-components";

export const ContactContainer = styled.section`
height: auto;
width: 100%;
background-image: url('./assets/techdigi3.jpg');
padding: 50px;

@media screen and (max-width: 600px) {
  padding: 50px 0px;
  
  
}

`

export const FormContact = styled.form`
width: 35%;
margin: auto;

color: #ffffff;

display: flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
border-radius: 5px;
border: solid 1px #ffffff;
background-color: black;


@media screen and (max-width: 600px) {
    width: 90%;
   
  }
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;


`

export const EmailLabel = styled.label`

width: 99%;
margin: auto;
margin-bottom: 10px;
`


export const EmailInput = styled.input`
width: 99%;
margin: auto;
border: none;
outline: none;
height: 23px;
border-radius: 5px;
margin-bottom: 20px;
&:focus  {
  
    
      box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
      0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
      0 0 12px #0e54ea;
      border: none;
  
  }
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
margin-bottom: 5px;
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
border: none;
outline: none;

border-radius: 5px;

&:focus  {
  
    
  box-shadow: 0 0 8px #0e54ea, 0 0 2px #0e54ea, 0 0 10px #0e54ea,
  0 0 6px #0e54ea, 0 0 20px #0e54ea, 0 0 20px #0e54ea, 0 0 1px #0e54ea,
  0 0 12px #0e54ea;
  border: none;

}

`

export const EmailSpan = styled.span`
color: red;
text-align: center;
font-size: .8em;

`

export const RecaptchaEmail = styled.div`

display: flex;
justify-content: center;
margin-top: 20px;

`

