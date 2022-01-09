import React from "react";
import { Loading } from "../HomeBody/HomeBodyStyles";
import { DoneContact, hDone } from "./DoneStyles";
import'./sentAnimations.css'

function Done() {
  return (
    <DoneContact>
      <div>
        <h4 style={{ color: "violet", fontSize: "3em" }}>

          <Loading load={true}>
            <div>
              <div className="ring2 ">
                Sent
                <span id="span"></span>
              </div>
            </div>
          </Loading>
        </h4>
      </div>
    </DoneContact>
  );
}

export default Done;
