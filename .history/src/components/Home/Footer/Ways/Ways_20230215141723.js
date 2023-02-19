import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../shared/Shared";

import "./Ways.css";
export default function Ways() {
  let [Data, setData] = useContext(DataContext);

  const [x, setX] = useState([]);

  useEffect(() => {
    if (Data?.length) {
      setX(
        Data
          ? Data[3]
            ? Data[3].Module
              ? Data[3].Module[0]
                ? Data[3].Module[0].ModuleDetails
                  ? Data[3].Module[0].ModuleDetails
                  : ""
                : ""
              : ""
            : ""
          : ""
      );
    }
  }, [Data]);

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
        <div className="mrtup">
          <div className="picMainWay">
            <div className="picMainWay1">
              <img
                className="mail"
                alt={
                  Data[3]
                    ? Data[3].Module[2]
                      ? Data[3].Module[2].ModuleDetails
                        ? Data[3].Module[2].ModuleDetails[0]
                          ? Data[3].Module[2].ModuleDetails[0].ImageAlt
                            ? Data[3].Module[2].ModuleDetails[0].ImageAlt
                            : ""
                          : ""
                        : ""
                      : ""
                    : ""
                }
                src={
                  Data[3]
                    ? Data[3].Module[2]
                      ? Data[3].Module[2].ModuleDetails
                        ? Data[3].Module[2].ModuleDetails[0]
                          ? Data[3].Module[2].ModuleDetails[0].ImageURL
                            ? Data[3].Module[2].ModuleDetails[0].ImageURL
                            : ""
                          : ""
                        : ""
                      : ""
                    : ""
                }
              />
            </div>
          </div>
        </div>
        <div
          className="col-12"
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
                    ? Data[3].Module[1].ModuleDetails[0].Title
                      ? Data[3].Module[1].ModuleDetails[0].Title
                      : ""
                    : ""
                  : ""
                : ""
              : ""}
          </div>

          {x.map((item, index) => (
            <div className="line" key={index}>
              {" "}
              <span
                className="number"
                onClick={() => (window.location.href = { tel: item.Subtitle })}
              >
                
              </span>
              <a href="tel:555-555-5555">{item.Subtitle}</a>
              <span className="dot"></span>
              <div className="n&img">
                <span className="name">
                  {" "}
                  <span className="twopoint">:</span>
                  {item.Title}
                </span>
                <span className="imagewaylitt">
                  <img src={item.ImageURL} alt={item.ImageAlt} />
                </span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
