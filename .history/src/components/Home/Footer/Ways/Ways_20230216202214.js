import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../shared/Shared";

import "./Ways.css";
export default function Ways(props) {
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
              {props.Module.map((item, index) => {
                switch (item.CategoryID) {
                  case 24:
                    <img
                      src={
                        item
                          ? item.ModuleDetails
                            ? item.ModuleDetails[0]
                              ? item.ModuleDetails[0].ImageURL
                              : ""
                            : ""
                          : ""
                      }
                      alt={
                        item
                          ? item.ModuleDetails
                            ? item.ModuleDetails[0]
                              ? item.ModuleDetails[0].ImageAlt
                              : ""
                            : ""
                          : ""
                      }
                    />;
                    break;

                  default:
                    break;
                }
              })}
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
          {props.Module.map((item, index) => {
            switch (item.CategoryID) {
              case 17:
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
                break;
              case 6:
                break;
              default:
                break;
            }
          })}
        

          {x.map((item, index) => (
            <div className="line" key={index}>
              {" "}
              <a className="number" href="tel: {item.Subtitle}">
                {item.Subtitle}
              </a>
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
