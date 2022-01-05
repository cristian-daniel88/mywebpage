import React from 'react'
import { BalsContainer, BodySlider, ButtonContainerSlide, ButtonSlider, LeftButtonSlider, ProjectsContainer, ProjectsFather, RightButtonSlider, SlideContainer, SlideFather } from './ProjectsBodyStyles'

function ProjectsBody() {
    
    return (
        <ProjectsContainer>
            <ProjectsFather>
                <SlideContainer>
                    <SlideFather>
                        <ButtonContainerSlide>
                                <ButtonSlider>
                                  <LeftButtonSlider/>
                                </ButtonSlider>
                        </ButtonContainerSlide>


                        <BodySlider>







                        </BodySlider>



                        <ButtonContainerSlide>
                                    <ButtonSlider>
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
