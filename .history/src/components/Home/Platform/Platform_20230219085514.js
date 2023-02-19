import React from "react";
import "./Platform.css";

export default function Platform(props) {

  return (
    <>
      <div
        className="containplatform"
        style={{
          backgroundColor: props ? props.BackgroundColor : "",
        }}
      >
        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 2:
              return item.ModuleDetails.map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 2:
                    return (
                      <div className="platformText" key={index}> 
                        {moduleDetails ? moduleDetails.Subtitle : ""}
                      </div>
                    );

                  default:
                    break;
                }
              });
            case 15:
              return item.ModuleDetails.map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 3:
                    return (
                      <span className="dastresi" key={index}>
                        {" "}
                        {moduleDetails ? moduleDetails.Title : ""}
                      </span>
                    );

                  default:
                    break;
                }
              });
            case 21:
              return item.ModuleDetails.map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 4:
                    return (
                      <button className="smartPlatform">
                        <img src="https://s2.uupload.ir/files/image_2023-02-14_09-28-25-removebg-preview_usmv.png"></img>
                        {moduleDetails ? moduleDetails.Title : ""}
                      </button>
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
