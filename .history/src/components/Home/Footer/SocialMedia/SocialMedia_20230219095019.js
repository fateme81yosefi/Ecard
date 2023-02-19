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
        backgroundColor:props.BackgroundColor
      }}
    >
      {" "}
      <div className="containSocial">
        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 20:
              return item.ModuleDetails.map((moduleDetails, index2) => {
                switch (moduleDetails.Id) {
                  case 18:
                    return (
                      <span key={index2}>
                        {moduleDetails ? moduleDetails.Title : ""}
                      </span>
                    );

                  default:
                    break;
                }
              });

            case 25:
              return (
                <div className="containLogo">
                  {item.ModuleDetails.map((moduleDetails, index1) =>
                    moduleDetails ? (
                      <img
                        key={index1}
                        className="socialMediaLogo"
                        src={moduleDetails.ImageURL}
                        alt={moduleDetails.ImageAlt}
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              );
            default:
              break;
          }
        })}
      </div>
    </div>
  );
}
