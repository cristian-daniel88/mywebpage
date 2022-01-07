import React from 'react'
import { useSelector } from 'react-redux'
import FormContactEn from '../FormContact/FormContactEn'
import FormContactEs from '../FormContact/FormContactEs'


function ContactEmailBody() {
  const language = useSelector(state => state.language.english)
  return (
    <>
      {language ? 
      ( 
        <FormContactEn/>
      )
      : 
      (
        <FormContactEs/>
      )
      }
    </>
  )
}

export default ContactEmailBody
