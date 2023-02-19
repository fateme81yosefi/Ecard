import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../shared/Shared";
import "./SocialMedia.css";
export default function SocialMedia(props) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {" "}
      <div className="containSocial">
        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 20:
              item.
              
            case 25:
              break;
            default:
              break;
          }
        })}

        <span>
          {Data[4]
            ? Data[4].Module[0]
              ? Data[4].Module[0].ModuleDetails
                ? Data[4].Module[0].ModuleDetails[0]
                  ? Data[4].Module[0].ModuleDetails[0].Title
                    ? Data[4].Module[0].ModuleDetails[0].Title
                    : ""
                  : ""
                : ""
              : ""
            : ""}
        </span>
        <div className="containLogo">
          {x.map((item, index) => (
            <img
              key={index}
              className="socialMediaLogo"
              src={item.ImageURL}
              alt={item.ImageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
