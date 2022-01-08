import React from 'react'
import { useSelector } from 'react-redux'

import ContactEmailBody from '../Components/ContactEmailBody/ContactEmailBody'
import WhatsAppOrEmail from '../Components/WhatsAppOrEmail/WhatsAppOrEmail';

function Contact() {
    
    const state = useSelector(state => state.email.email);
    

    return (
    <>

     {state 
     ? (<ContactEmailBody/>) 
     : 
     (<WhatsAppOrEmail/>)}
   
  
    
    </>    
    ) 
}

export default Contact
