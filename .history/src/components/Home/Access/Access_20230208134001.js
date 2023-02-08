import React, { useContext, useEffect } from "react";
import "./Access.css";
import { DataContext } from "../../shared/Shared";
import { useState } from "react";

export default function Access() {
  let [Data, setData] = useContext(DataContext);

  const [x, setX] = useState([]);

  useEffect(() => {
    // console.log ('DATA ===>' , Data)

    if (Data?.length) {
      // console.log ('salam : ' , Data?.length)

      setX(
        Data
          ? Data[2]
            ? Data[2].Module
              ? Data[2].Module[0]
                ? Data[2].Module[0].ModuleDetails
                  ? Data[2].Module[0].ModuleDetails
                  : ""
                : ""
              : ""
            : ""
          : ""
      );
    }
  }, [Data]);

  console.log("x ====>", x);
  return (
    <>
      <div className="containplatform1">
        <img
          src={
            Data
              ? Data[2]
                ? Data[2].Module
                  ? Data[2].Module[2]
                    ? Data[2].Module[2].ModuleDetails
                      ? Data[2].Module[2].ModuleDetails[0]
                        ? Data[2].Module[2].ModuleDetails[0].ImageURL
                          ? Data[2].Module[2].ModuleDetails[0].ImageURL
                          : ""
                        : ""
                      : ""
                    : ""
                  : ""
                : ""
              : ""
          }
          alt="access pic"
        />
      </div>
      <div
        className="containplatform"
        id="containplatformDown"
        style={{
          backgroundColor: Data[2] ? Data[2].BackgroundColor : "",
        }}
      >
        <br />
        <br />
        <br />
        <button className="ApiTop">
          {Data
            ? Data[2]
              ? Data[2].Module
                ? Data[2].Module[1]
                  ? Data[2].Module[1].ModuleDetails
                    ? Data[2].Module[1].ModuleDetails[0]
                      ? Data[2].Module[1].ModuleDetails[0].Title
                        ? Data[2].Module[1].ModuleDetails[0].Title
                        : ""
                      : ""
                    : ""
                  : ""
                : ""
              : ""
            : ""}
        </button>

        {x.map((item, index) => 
          // (<p>{item.Title}</p>)
(
        <button className="projButton" key={index}>
        <span className="containtxttitle">
          <div className="circlieLittle"></div> { item.Title }<span>-</span> <span className="platforntxt"> { " "+item.Subtitle+" " } </span>
        </span>
         
        {/* {console.log("item =>", item)} */}
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
      </button>)
        )}
        
      </div>
    </>
  );
}
