import React, { useContext } from "react";
import { DataContext } from "../../../shared/Shared";

import "./Ways.css";
export default function Ways() {
  let [Data, setData] = useContext(DataContext);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="containWays">
        <div className="col-xs-12 col-lg-5 col-xl-3">
          <div className="picMainWay">
            <div className="picMainWay1">
              <img
                className="mail"
                alt=""
                src={
                  Data[3]
                    ? Data[3].Module[2]
                      ? Data[3].Module[2].ModuleDetails
                      ? Data[3].Module[2].ModuleDetails[0]
                      ? Data[3].Module[2].ModuleDetails[0].ImageURL?
                      Data[3].Module[2].ModuleDetails[0].ImageURL
                      :""
                      :""
                      : ""
                    : "" : "" 
                    
                }
              />
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-lg-9"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="headOfWay">
            {Data[3]
              ? Data[3].Module[1]
                ? Data[3].Module[1].ModuleDetails
                ? Data[3].Module[1].ModuleDetails[0]
                ? Data[3].Module[1].ModuleDetails[0].Title?
                Data[3].Module[1].ModuleDetails[0].Title
                :""
                :""
                : ""
              : "" : "" 
              
              }
          </div>


          <div className="line">
            {" "}
            <span className="number"> {Data[4]
            ? Data[3].Module[0]
              ? Data[3].Module[0].ModuleDetails
                ? Data[3].Module[0].ModuleDetails[0]
                  ? Data[3].Module[0].ModuleDetails[0].Subtitle
                    ? Data[3].Module[0].ModuleDetails[0].Subtitle
                    : ""
                  : ""
                : ""
              : ""
            : ""}</span>
            <span className="dot">..................................</span>
          <div className="n">
          <span className="name">  {Data[4]
            ? Data[3].Module[0]
              ? Data[3].Module[0].ModuleDetails
                ? Data[3].Module[0].ModuleDetails[0]
                  ? Data[3].Module[0].ModuleDetails[0].Title
                    ? Data[3].Module[0].ModuleDetails[0].Title
                    : ""
                  : ""
                : ""
              : ""
            : ""}</span>
            <span className="imagewaylitt">
              <img src="https://s2.uupload.ir/files/mobile_r5q3.png" />
            </span>{" "}
          </div>
          </div>

          <div className="line">
            {" "}
            <span className="number">{Data[4]
            ? Data[3].Module[0]
              ? Data[3].Module[0].ModuleDetails
                ? Data[3].Module[0].ModuleDetails[1]
                  ? Data[3].Module[0].ModuleDetails[1].Subtitle
                    ? Data[3].Module[0].ModuleDetails[1].Subtitle
                    : ""
                  : ""
                : ""
              : ""
            : ""}</span>
            <span className="dot">........................</span>
          <div>
          <span className="name"> {Data[4]
            ? Data[3].Module[0]
              ? Data[3].Module[0].ModuleDetails
                ? Data[3].Module[0].ModuleDetails[1]
                  ? Data[3].Module[0].ModuleDetails[1].Title
                    ? Data[3].Module[0].ModuleDetails[1].Title
                    : ""
                  : ""
                : ""
              : ""
            : ""}</span>
            <span className="imagewaylitt">
              <img src="https://s2.uupload.ir/files/foroosh_ty9u.png" />
            </span>{" "}
          </div>
          </div>

          <div className="line">
            {" "}
            <span className="number">{Data[4]
            ? Data[3].Module[0]
              ? Data[3].Module[0].ModuleDetails
                ? Data[3].Module[0].ModuleDetails[2]
                  ? Data[3].Module[0].ModuleDetails[2].Subtitle
                    ? Data[3].Module[0].ModuleDetails[2].Subtitle
                    : ""
                  : ""
                : ""
              : ""
            : ""}</span>
            <span className="dot">..................</span>
           <div>
           <span className="name">{Data[4]
            ? Data[3].Module[0]
              ? Data[3].Module[0].ModuleDetails
                ? Data[3].Module[0].ModuleDetails[2]
                  ? Data[3].Module[0].ModuleDetails[2].Title
                    ? Data[3].Module[0].ModuleDetails[2].Title
                    : ""
                  : ""
                : ""
              : ""
            : ""} </span>
            <span className="imagewaylitt">
              <img src="https://s2.uupload.ir/files/support_9afj.png" />
            </span>{" "}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
