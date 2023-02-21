import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../shared/Shared";
import "./SocialMedia.css";
export default function SocialMedia(props) {
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
  console.log(props.Module);

  let x = 0;
  useEffect(() => {
    if(x>4){
      document.getElementById("").style.flexDirection="column"
    }
  }, [x]);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: props.BackgroundColor,
      }}
    >
      {" "}
      <div className="containSocial">
        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 20:
              return item.ModuleDetails.sort(compare).map(
                (moduleDetails, index2) => {
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
                }
              );

            case 25:
              return (
                <div key={index} className="containLogo" id=""> 
                  {item.ModuleDetails.sort(compare).map(
                    (moduleDetails, index1) =>
                      moduleDetails ? ((x=x+1),
                  
                        <img
                          key={index1}
                          onClick={() =>
                            (window.location.href = moduleDetails.URL)
                          }
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
