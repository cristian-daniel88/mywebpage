import React from 'react'
import { useDispatch } from 'react-redux'
import { changeEmailAction } from '../../redux/whatsappEmail/whatsappEmailActions'
import { WhatsAppOrEmailBotones, WhatsAppOrEmailContainer } from './WhatsAppOrEmailStyle'

function WhatsAppOrEmail() {
    const dispatch = useDispatch()

    const changeToEmail =  () => {
        dispatch(changeEmailAction())
    }

    return (
        <WhatsAppOrEmailContainer>
            <WhatsAppOrEmailBotones>Whats app</WhatsAppOrEmailBotones>
            <WhatsAppOrEmailBotones onClick={changeToEmail}>Email</WhatsAppOrEmailBotones>
        </WhatsAppOrEmailContainer>
    )
}

export default WhatsAppOrEmail
