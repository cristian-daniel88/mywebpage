import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeEmailAction } from '../../redux/whatsappEmail/whatsappEmailActions'
import { contactEn } from '../../translate/english';
import { contactEs } from '../../translate/spanish';

import { EmailContact, WhatAppContact, WhatsAppOrEmailA, WhatsAppOrEmailBotones, WhatsAppOrEmailContainer } from './WhatsAppOrEmailStyle'

function WhatsAppOrEmail() {
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.english)

    const changeToEmail =  () => {
        dispatch(changeEmailAction())
    }

    return (
        <WhatsAppOrEmailContainer>
            <WhatsAppOrEmailA href={language ? contactEn : contactEs} target='_blank'><div style={{'padding' : '5% 0'}}>Whats App</div> <WhatAppContact/></WhatsAppOrEmailA> 
            <WhatsAppOrEmailBotones onClick={changeToEmail}><div style={{'padding' : '5% 0'}}>Email</div><EmailContact/></WhatsAppOrEmailBotones>
        </WhatsAppOrEmailContainer>
    )
}

export default WhatsAppOrEmail
