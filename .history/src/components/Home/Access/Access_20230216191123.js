import React, { useContext, useEffect } from "react";
import "./Access.css";
import { DataContext } from "../../shared/Shared";
import { useState } from "react";

export default function Access(props) {
  return (
    <>
      <div
        className="containplatform"
        id="containplatformDown"
        style={{
          backgroundColor: props ? props.BackgroundColor : "",
        }}
      >
        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 22:
              item.ModuleDetails.map((moduleDetails,index)=>(
                <button
                className="projButton"
                key={index}
                onClick={() => (window.location.href = moduleDetails.URL)}
              >
                <span className="containtxttitle">
                  <div className="containcircTitle">
                    {" "}
                    <div className="circlieLittle"></div>
                    {moduleDetails.Title}
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
              ))

            case 16:
              item.ModuleDetails.map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 6:
                    return (
                      <button className="ApiTop">
                        {moduleDetails ? moduleDetails.Title : ""}
                      </button>
                    )

                  default:
                    break;
                }
              });

            case 23:
              item.ModuleDetails.map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 5:
                    return (
                      <img
                        alt={moduleDetails ? moduleDetails.ImageAlt : ""}
                        src={moduleDetails ? moduleDetails.ImageURL : ""}
                      />
                    );

                  default:
                    break;
                }
              });

            default:
              break;
          }
        })}

        <br />
        <br />
        <br />

        {/* {x.map((item, index) => (
     
        ))} */}
      </div>
    </>
  );
}
