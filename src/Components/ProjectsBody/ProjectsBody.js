import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { dbEn, dbEs } from '../../db/db'
import { changeProject } from '../../redux/changeProject/changeProjectActions';
import { BodySlide,BotonContainer, DivList, Left, LeftButton, LiLista, LiLista2, LinkA, Lista, Lista2, ProjectsContainer, ReactIcon, Right, RightButton, Strong, UlLista} from './ProjectsBodyStyles'

function ProjectsBody() {
    const [index, setIndex] = useState(0);
    const [array, setArray] = useState(dbEn);
    const language = useSelector((state) => state.language.english);
    const dispatch = useDispatch();
    const change = useSelector(state => state.project.toggle);
    // const array = dbEn;
    useEffect(() => {
        if (language) {
            return  setArray(dbEn)
          } else {
             return setArray(dbEs)
          }
     
    }, [language])
  

    const chooce = (id) => {
        setIndex(id)
       
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
            <Strong>Project: </Strong>{array[index].nameProject && array[index].nameProject}
            <br/>
            <br/>
            <Strong>Description: </Strong>
             {array[index].description && array[index].description}
            <br/>
            <br/>
            <Strong>Tecnologies: </Strong>
            {array[index].tecnologies}
            <br/>
            <br/>
            {array[index].linkFront1 && (<><Strong>Link frontend: </Strong><LinkA href={array[index].linkFront1} target='_blank'>Click Here</LinkA>
            <br/>
            <br/>
            </>)}
            {array[index].linkFront2 && (<><Strong>Link frontend II: </Strong><LinkA href={array[index].linkFront2} target='_blank'>Click Here</LinkA>
            <br/>
            <br/>
            </>)}
            {array[index].linkApi1 && (<><Strong>Link backend: </Strong><LinkA href={array[index].linkApi1} target='_blank'>Click Here</LinkA>
            <br/>
            <br/>
            </>)}
            {array[index].linkApi2 && (<><Strong>Link backend II: </Strong><LinkA href={array[index].linkAp12} target='_blank'>Click Here</LinkA>
            <br/>
            <br/>
            </>)}
            {array[index].videoLink && (<><Strong>Video Demostration: </Strong><LinkA href={array[index].videoLink} target='_blank'>Click Here</LinkA>
            <br/>
            <br/>
            </>)}
            <Strong>Github: </Strong><LinkA href={array[index].gitHub && array[index].nameProject}>Click here</LinkA>
            
            
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
                                <LiLista2 key={value.id} color={index} i={i}  onClick={()=> {chooce(i)}}>
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
