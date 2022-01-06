import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { dbEn } from '../../db/db'
import { changeProject } from '../../redux/changeProject/changeProjectActions';
import {BodySlide, BotonContainer, DivList, Left, LeftButton, LiLista, LiLista2, Lista, Lista2, ProjectsContainer, ReactIcon, Right, RightButton, UlLista} from './ProjectsBodyStyles'

function ProjectsBody() {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const change = useSelector(state => state.project.toggle);
    const array = dbEn;


    const chooce = (id) => {
        setIndex(id)
        console.log(index)
    }
    
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
                <LeftButton onClick={timerLeft}>
                        <Left/>
                </LeftButton>
                <RightButton onClick={timerRight}>
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
                                    <DivList style={{'display': 'flex'}} onClick={()=> {chooce(i)}}color={index} i={i}>

                                   <ReactIcon color={index} i={i}/> <div>{value.nameProject}</div>
                                    </DivList>
                                </LiLista>
                            ))
                        }
                </UlLista>
           </Lista>

           <Lista2>
                    <ul style={{'marginTop': '20px', 'display':'flex', 'paddingLeft':'150px'}}>
                    {
                            array.map((value, i) => (
                                <LiLista2 key={value.id} color={index} i={i}>
                                    <ReactIcon color={index} i={i}/>
                                    
                                </LiLista2>
                            ))
                        }
                    </ul>
           </Lista2>
         
       </ProjectsContainer>
     
        </>
    )
}

export default ProjectsBody
