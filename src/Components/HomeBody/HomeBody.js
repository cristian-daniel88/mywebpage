import React, { useEffect, useState } from "react";
import {
  Body,
  BodyContainer,
  Box1,
  Box2,
  Computer,
  ComputerContainer,
  Loading,
  Parrafo,
  TextComputer,
  TouchPad,
} from "./HomeBodyStyles";
import "./homeBodyAnimations.css";

function HomeBody() {
  const curlyBraces1 = '{'
  const curlyBraces2 = '};'
  const [loading, setLoading] = useState(true);
  const [tapping, setTapipping] = useState(true);
  const [tapping2, setTapping2] = useState(false);
  const [tapping3, setTapping3] = useState(true)

  let mypromise = function functionOne(testInput) {
    console.log("Entered function");
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loading) {
          resolve(setLoading(false));
        } else {
          reject("Rejected");
        }
      }, 2000);
    });

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loading) {
          resolve(setTapipping(false), setTapping2(true));
        } else {
          reject("Rejected");
        }
      }, 10000);
    });

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loading) {
          resolve(setTapping2(false), setTapping3(false));
        } else {
          reject("Rejected");
        }
      }, 18000);
    });
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
              export const fullStack = {curlyBraces1}
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
        <Box2></Box2>
      </BodyContainer>
    </Body>
  );
}

export default HomeBody;

//
