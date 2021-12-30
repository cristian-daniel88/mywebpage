import React, { useEffect, useState } from "react";
import { Body, BodyContainer, Box1, Box2, Computer, ComputerContainer, Loading, TextComputer, TouchPad } from "./HomeBodyStyles";
import "./homeBodyAnimations.css";

function HomeBody() {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
          setloading(false)
        }, 2000);
    }, [])
  return (
    
    <Body>

      <Loading load={loading}>
      <div>
      <div className="ring">
        Loading
        <span></span>
      </div>
      </div>
      </Loading>

      <BodyContainer load={loading}>
        <Box1 load={loading}>
            <ComputerContainer>
              <Computer src="./assets/laptop.png"/>
              <TextComputer>
                <p className="line anim-typewriter" >Welcome to My Web Page            npm start</p>
                

              </TextComputer>
              <TouchPad/>
            </ComputerContainer>
        </Box1>
        <Box2>

        </Box2>
      
        
      </BodyContainer>


    </Body>
  
  );
}

export default HomeBody;



//