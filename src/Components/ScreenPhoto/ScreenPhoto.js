import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { screenAction } from '../../redux/screen/screenReducerAction';
import { CloseIcon, ContainerIcon, ImagenCv, ScreenContainer, ScreenMarco } from './ScreenPhotoStyles'


function ScreenPhoto() {
    const screen = useSelector(state => state.screen.screen);
    const dispatch = useDispatch()
   
    const handScreen = () => {
        dispatch(screenAction())
    }
    return (
        <ScreenContainer sacar={screen}>
            <ScreenMarco>
                <ContainerIcon>
                    <CloseIcon onClick={handScreen}/>
                </ContainerIcon>

                <ImagenCv src='./assets/foto-cv.jpg' alt='Cristian Daniel Herrera, web developer'/>
            </ScreenMarco>
        </ScreenContainer>
    )
}

export default ScreenPhoto
