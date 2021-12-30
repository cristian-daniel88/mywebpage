import React, { useEffect, useState } from "react";
import {
  Body,
  BodyContainer,
  Box1,
  Box2,
  Computer,
  ComputerContainer,
  HireMeButton,
  HireMeDiv,
  HiThereDiv,
  HiThereH3,
  Loading,
  Parrafo,
  TextComputer,
  TouchPad,
} from "./HomeBodyStyles";
import "./homeBodyAnimations.css";
import { hiThereUk, myProfileUk } from "../../translate/english";
import { hiThereEs, myProfileES } from "../../translate/spanish";
import { useSelector } from "react-redux";

function HomeBody() {
  const language = useSelector(state => state.language.english)
  const curlyBraces1 = '{'
  const curlyBraces2 = '};'
  const [loading, setLoading] = useState(true);
  const [tapping, setTapipping] = useState(true);
  const [tapping2, setTapping2] = useState(false);
  const [tapping3, setTapping3] = useState(true)

  let mypromise = function functionOne(testInput) {
      setTimeout(() => {
     
          setLoading(false);
      
      }, 2000);
 
      setTimeout(() => {
       
          setTapipping(false); setTapping2(true);
     
      }, 10000);


      setTimeout(() => {
     
      setTapping2(false); setTapping3(false)
       
      }, 18000);
   
  };

  useEffect(() => {
    mypromise();
  }, []);
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
            <Computer src="./assets/laptop.png" />
            <TextComputer>
              <div style={{'display': 'inline', 'color':'violet'}}>export</div> <div style={{'display': 'inline', 'color':'#8383cf'}}>const</div> <div style={{'display': 'inline', 'color': 'lightblue'}}>fullStack</div> = {curlyBraces1}
              <Parrafo className="parrafo" tapping={tapping}>
              name:<b style={{'fontWeight': '200', color:'orange'}}> 'cristian daniel'</b><b style={{'fontWeight': '200', 'color':'white'}}>,</b>
              </Parrafo>
              {!tapping && (<Parrafo className="parrafo" tapping={tapping2}>lastName:<b style={{'fontWeight': '200', color:'orange'}}>'herrera'</b><b style={{'fontWeight': '200', 'color':'white'}}>,</b></Parrafo>)}
              {!tapping3 && (<Parrafo className="parrafo" tapping={true}>profession:<b style={{'fontWeight': '200', color:'orange'}}> 'web developer'</b></Parrafo>)}
              {curlyBraces2}
            </TextComputer>
            <TouchPad />
          </ComputerContainer>
        </Box1>
          

        <Box2 load={loading}>
          <HiThereDiv>
              <HiThereH3>
              {language ? hiThereUk : hiThereEs}
              </HiThereH3>
          </HiThereDiv>

          <HireMeDiv>
            <HireMeButton>
              {language ? myProfileUk : myProfileES}
            </HireMeButton>
          </HireMeDiv>
        </Box2>
      </BodyContainer>
    </Body>
  );
}

export default HomeBody;

//
