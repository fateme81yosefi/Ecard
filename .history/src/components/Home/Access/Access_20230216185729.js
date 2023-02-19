import React, { useContext, useEffect } from "react";
import "./Access.css";
import { DataContext } from "../../shared/Shared";
import { useState } from "react";

export default function Access(props) {
  return (
    <>
      {props.Module.map((item, index) => {
        switch (item.CategoryID) {
          case 22:

          case 16:
          case 23:
            item.ModuleDetails.map((moduleDetails,index)=>{
              switch (moduleDetails.Id) {
                case 5:
                  return(
                    <img alt=/>
                  )
                  
              
                default:
                  break;
              }


            })

          default:
            break;
        }
      })}
      <div
        className="containplatform"
        id="containplatformDown"
        style={{
          backgroundColor: props ? props.BackgroundColor : "",
        }}
      >
        <br />
        <br />
        <br />
        <button className="ApiTop">
          {Data
            ? Data[2]
              ? Data[2].Module
                ? Data[2].Module[1]
                  ? Data[2].Module[1].ModuleDetails
                    ? Data[2].Module[1].ModuleDetails[0]
                      ? Data[2].Module[1].ModuleDetails[0].Title
                        ? Data[2].Module[1].ModuleDetails[0].Title
                        : ""
                      : ""
                    : ""
                  : ""
                : ""
              : ""
            : ""}
        </button>

        {x.map((item, index) => (
          <button
            className="projButton"
            key={index}
            onClick={() => (window.location.href = item.URL)}
          >
            <span className="containtxttitle">
              <div className="containcircTitle">
                {" "}
                <div className="circlieLittle"></div>
                {item.Title}
                <span className="dash"> - </span>
              </div>
              <span className="platforntxt">
                <span className="ssssssss">{" " + item.Subtitle + " "} </span>
                <img
                  src="https://s2.uupload.ir/files/arrow_w6g.png"
                  alt="arrow"
                />
              </span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
