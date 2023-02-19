import React from "react";

import "./Ways.css";
export default function Ways(props) {
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
        {props.Module.map((item, index) => {
          switch (item.CategoryID) {
            case 24:
              return (
                <div className="mrtup"  key={index}>
                  <div className="picMainWay" style={{backgroundColor:item.BackgroundColor}}>
                    <div className="picMainWay1" style={{backgroundColor:item.BackgroundColor}}>
                      {item.ModuleDetails.map((modeuleDetails, index) => {
                        return (
                          <img
                            src={modeuleDetails ? modeuleDetails.ImageURL : ""}
                            alt={modeuleDetails.ImageAlt}
                            key={index}
                            className="mail"
                          />
                        );
                      })}
                    </div>
                  </div>{" "}
                </div>
              );
            default:
              break;
          }
        })}

        <div
          className="col-12"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.Module.map((item, index) => {
            switch (item.CategoryID) {
              case 17:
                return (
                  <div className="headOfWay" key={index} item>
                    {item.ModuleDetails
                      ? item.ModuleDetails[0]
                        ? item.ModuleDetails[0].Title
                        : ""
                      : ""}
                  </div>
                );

              case 6:
                return item.ModuleDetails.map((moduleDetails, index) => (
                  <div className="line" key={index}>
                    <a className="number" href="tel: {moduleDetails.Subtitle}">
                      {moduleDetails.Subtitle}
                    </a>
                    <span className="dot"></span>
                    <div className="n&img">
                      <span className="name">
                        <span className="twopoint">:</span>
                        {moduleDetails.Title}
                      </span>
                      <span className="imagewaylitt">
                        <img
                          src={moduleDetails.ImageURL}
                          alt={moduleDetails.ImageAlt}
                        />
                      </span>
                    </div>
                  </div>
                ));

              default:
                break;
            }
          })}
        </div>
      </div>
    </div>
  );
}
