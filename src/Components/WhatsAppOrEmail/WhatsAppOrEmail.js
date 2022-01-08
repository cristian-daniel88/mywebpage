import React from 'react'
import { useDispatch } from 'react-redux'
import { changeEmailAction } from '../../redux/whatsappEmail/whatsappEmailActions'

import { EmailContact, WhatAppContact, WhatsAppOrEmailA, WhatsAppOrEmailBotones, WhatsAppOrEmailContainer } from './WhatsAppOrEmailStyle'

function WhatsAppOrEmail() {
    const dispatch = useDispatch()

    const changeToEmail =  () => {
        dispatch(changeEmailAction())
    }

    return (
        <WhatsAppOrEmailContainer>
            <WhatsAppOrEmailA href='' target='_blank'><div style={{'padding' : '5% 0'}}>Whats App</div> <WhatAppContact/></WhatsAppOrEmailA> 
            <WhatsAppOrEmailBotones onClick={changeToEmail}><div style={{'padding' : '5% 0'}}>Email</div><EmailContact/></WhatsAppOrEmailBotones>
        </WhatsAppOrEmailContainer>
    )
}

export default WhatsAppOrEmail
