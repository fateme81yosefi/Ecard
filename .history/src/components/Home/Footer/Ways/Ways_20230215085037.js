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
  console.log(x);

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
                alt=""
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

          {x.map((item , index) => (
            <div className="line">
              {" "}
              <span className="number">{x.Subtitle}</span>
              <span className="dot">
                ......................................................
              </span>
              <div className="n&img">
                <span className="name">
                  {" "}
                  <span className="twopoint">:</span>
                  {x.Title}
                </span>
                <span className="imagewaylitt">
                  <img src="https://s2.uupload.ir/files/mobile_r5q3.png" />
                </span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
