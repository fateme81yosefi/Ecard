import React from "react";
import "./Platform.css";

export default function Platform(props) {
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
              return item.ModuleDetails.sort(compare).map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 2:
                    return (
                      <div
                        className="platformText"
                        key={index}
                        style={{
                          backgroundColor: moduleDetails.BackgroundColor,
                        }}
                      >
                        {moduleDetails ? moduleDetails.Subtitle : ""}
                      </div>
                    );

                  default:
                    break;
                }
              });
            case 15:
              return item.ModuleDetails.sort(compare).map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 3:
                    return (
                      <span className="dastresi" key={index}   onClick={() =>
                        (window.location.href = moduleDetails.URL)
                      }>
                        {" "}
                        {moduleDetails ? moduleDetails.Title : ""}
                      </span>
                    );

                  default:
                    break;
                }
              });
            case 21:
              return item.ModuleDetails.sort(compare).map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 4:
                    return (
                      <button
                        className="smartPlatform"
                        key={index}
                        style={{
                          backgroundColor: moduleDetails.BackgroundColor,
                        }}
                      >
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
