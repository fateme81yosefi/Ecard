import React, { useContext } from "react";
import "./Platform.css";
import { DataContext } from "../../shared/Shared";

export default function Platform(props) {
  let [Data, setData] = useContext(DataContext);

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
              return (
                <div className="platformText">
                  {item
                    ? item.ModuleDetails
                      ? item.ModuleDetails[0].Subtitle
                      : ""
                    : ""}
                </div>
              );
            case 15:
              return item.ModuleDetails.map((moduleDetails, index) => {
                switch (moduleDetails.Id) {
                  case 3:
                    <span className="dastresi">
                      {" "}
                      {moduleDetails ? moduleDetails.Title : ""}
                    </span>;
                    break;

                  default:
                    break;
                }
              });
              case 21:
                return item.ModuleDetails.map((moduleDetails, index) => {
                  switch (moduleDetails.Id) {
                    case 4:
                      <span className="dastresi">
                        {" "}
                        {moduleDetails ? moduleDetails.Title : ""}
                      </span>;
                      break;
  
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
