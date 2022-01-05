import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dbEn } from '../../db/db'
import { changeProject } from '../../redux/changeProject/changeProjectActions';
import {BodySlide, BotonContainer, Left, LeftButton, LiLista, Lista, ProjectsContainer, Right, RightButton, UlLista} from './ProjectsBodyStyles'

function ProjectsBody() {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const change = useSelector(state => state.project.toggle);
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

    const timerRight = () => {
    
            dispatch(changeProject());
            
         setTimeout(() => {
            dispatch(changeProject())
            rigthButtonSlide()
         },500 ); 

      
    }

    const timerLeft = () => {
    
        dispatch(changeProject());
        
     setTimeout(() => {
        dispatch(changeProject())
        leftButtonSlide()
     },500 ); 

  
}

    
  

   
    
    
    return (
        <>
       <ProjectsContainer>
           <BotonContainer>
                <LeftButton onClick={timerRight}>
                        <Left/>
                </LeftButton>
                <RightButton onClick={timerLeft}>
                        <Right/>
                </RightButton>

           </BotonContainer>
           <BodySlide toggle={change}>

           {array[index].description}
           </BodySlide>

           <Lista>
                <UlLista>
                        {
                            array.map((value, i) => (
                                <LiLista key={value.id} color={index} i={i}>
                                    {value.nameProject}
                                </LiLista>
                            ))
                        }
                </UlLista>
           </Lista>
         
       </ProjectsContainer>
     
        </>
    )
}

export default ProjectsBody
