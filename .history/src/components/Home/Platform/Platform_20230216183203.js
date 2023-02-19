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
              return (
                item.ModuleDetails.map((moduleDetails,index)=>(
                  switch (moduleDetails.Id) {
                    case value:
                      
                      break;
                  
                    default:
                      break;
                  }

                )
                )
                // <span className="dastresi">
                //   {" "}
                //   {item
                //     ? item.ModuleDetails
                //       ? item.ModuleDetails[0]
                //         ? item.ModuleDetails[0].Title
                //         : ""
                //       : ""
                //     : ""}
                // </span>
              );

            // <button className="smartPlatform">
            // <img src="https://s2.uupload.ir/files/image_2023-02-14_09-28-25-removebg-preview_usmv.png"></img>
            //   {Data[1]
            //     ? Data[1].Module
            //       ? Data[1].Module[1].ModuleDetails
            //         ? Data[1].Module[1].ModuleDetails[0].Title?Data[1].Module[1].ModuleDetails[0].Title
            //         :""
            //         : ""
            //       : ""
            //     : ""}{" "}
            // </button>

            default:
              break;
          }
        })}
      </div>
    </>
  );
}
