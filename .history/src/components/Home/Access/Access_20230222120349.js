import React, { useContext, useEffect } from "react";
import "./Access.css";
import { DataContext } from "../";
import { useState } from "react";
import { BrandContext } from "../shared/Shared";

export default function Access(props) {
  let [Brand, setBrand] = useContext(BrandContext);

  function compare(a, b) {
    if (a.Priority < b.Priority) {
      return -1;
    }
    if (a.Priority > b.Priority) {
      return 1;
    }
    return 0;
  }

  props.Module.sort(compare);

  return (
    <>
      {props.Module.map((item, index) => {
        switch (item.CategoryID) {
          case 23:
            return (
              <div
                className="containplatform1"
                key={index}
                style={{ backgroundColor: item.BackgroundColor }}
              >
                {item.ModuleDetails.sort(compare).map((moduleDetails, index) => {
                  switch (moduleDetails.Id) {
                    case 5:
                      return (
                        <img
                          alt={moduleDetails ? moduleDetails.ImageAlt : ""}
                          key={index}
                          src={moduleDetails ? moduleDetails.ImageURL : ""}
                        />
                      );

                    default:
                      break;
                  }
                })}{" "}
              </div>
            );

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

        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 22:
              return item.ModuleDetails.sort(compare).map((moduleDetails, index) => (
                <button
                  className="projButton"
                  key={index}
                  onClick={() => (window.location.href = moduleDetails.URL)}
                  style={{ backgroundColor: moduleDetails.BackgroundColor }}
                >
                  <span className="containtxttitle">
                    <div className="containcircTitle">
                      <div className="circlieLittle" style={{ backgroundColor:Brand , color:moduleDetails.TitleForeColor}}></div>
                      {moduleDetails.Title}
                      <span className="dash"> - </span>
                    </div>
                    <span className="platforntxt">
                      <span className="ssssssss" 
                      style={{backgroundColor: moduleDetails.BackgroundColor , color:moduleDetails.SubTitleForeColor}}
                      >
                        {" " + moduleDetails.Subtitle + " "}{" "}
                      </span>
                      <img
                        src="https://s2.uupload.ir/files/arrow_w6g.png"
                        alt="arrow"
                      />
                    </span>
                  </span>
                </button>
              ));

            case 16:
              return item.ModuleDetails.sort(compare).map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 6:
                    return (
                      <span
                        className="ApiTop"
                        key={index}
                        style={{
                          backgroundColor: moduleDetails.BackgroundColor,
                          color:moduleDetails.TitleForeColor
                        }}
                      >
                        {moduleDetails ? moduleDetails.Title : ""}
                      </span>
                    );

                  default:
                    break;
                }
              });

            default:
              break;
          }
        })}
      </div>
    </>
  );
}
