import React, { useState } from 'react'
import { dbEn } from '../../db/db'
import { BalsContainer, BodySlider, ButtonContainerSlide, ButtonSlider, LeftButtonSlider, ProjectsContainer, ProjectsFather, RightButtonSlider, SlideContainer, SlideFather } from './ProjectsBodyStyles'

function ProjectsBody() {
    const [index, setIndex] = useState(0);
   
    const array = dbEn;

    
    const rigthButtonSlide = () => {
        if(index + 1 >= array.length) {
             return setIndex(0)
        }
        
        setIndex(index + 1);   
    }

    const leftButtonSlide = () => {
        if (index <= 0) {
          return  setIndex(array.length - 1);

        }

        setIndex(index - 1)
    } 

    
    
    return (
        <ProjectsContainer>
            <ProjectsFather>
                <SlideContainer>
                    <SlideFather>
                        <ButtonContainerSlide>
                                <ButtonSlider onClick={leftButtonSlide} >
                                  <LeftButtonSlider/>
                                </ButtonSlider>
                        </ButtonContainerSlide>


                        <BodySlider>


                                {array[index].description}




                        </BodySlider>



                        <ButtonContainerSlide>
                                    <ButtonSlider onClick={rigthButtonSlide}>
                                        <RightButtonSlider/>
                                    </ButtonSlider>
                        </ButtonContainerSlide>
                    </SlideFather>



                    <BalsContainer>

                    </BalsContainer>
                </SlideContainer>
            </ProjectsFather>
        </ProjectsContainer>
    )
}

export default ProjectsBody
