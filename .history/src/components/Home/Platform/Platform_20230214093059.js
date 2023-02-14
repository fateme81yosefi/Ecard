import React, { useContext } from "react";
import "./Platform.css";
import { DataContext } from "../../shared/Shared";

export default function Platform() {
  let [Data, setData] = useContext(DataContext);

  console.log();

  return (
    <>
      <div
        className="containplatform"
        style={{
          backgroundColor: Data[1] ? Data[1].BackgroundColor : "",
        }}
      >
        <div className="platformText">
          {Data[1]
            ? Data[1].Module
              ? Data[1].Module[0].ModuleDetails
                ? Data[1].Module[0].ModuleDetails[0].Subtitle
                : ""
              : ""
            : ""}
        </div>
        <span className="dastresi">
          {" "}
          {Data[1] ? (Data[1].Module[2] ? Data[1].Module[2].Name : "") : ""}
        </span>
        <button className="smartPlatform">
        <img src="https://s2.uupload.ir/files/image_2023-02-14_09-28-25-removebg-preview_usmv.png"></img>
          {Data[1]
            ? Data[1].Module
              ? Data[1].Module[1].ModuleDetails
                ? Data[1].Module[1].ModuleDetails[0].Title?Data[1].Module[1].ModuleDetails[0].Title
                :""
                : ""
              : ""
            : ""}{" "}
        </button>
      </div>
    </>
  );
}
