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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
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
