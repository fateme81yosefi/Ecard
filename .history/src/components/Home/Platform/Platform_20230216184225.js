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


                item.ModuleDetails.map((moduleDetails, index) => {
                  switch (moduleDetails.Id) {
                    case 2:
                      <button className="smartPlatform">
                        <img src="https://s2.uupload.ir/files/image_2023-02-14_09-28-25-removebg-preview_usmv.png"></img>
                        {moduleDetails ? moduleDetails.Title : ""}
                      </button>;


<div className="platformText">
{moduleDetails?moduleDetails.Subtitle:""}
</div>
  
                    default:
                      break;
                  }
                })


                
             
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
                    <button className="smartPlatform">
                      <img src="https://s2.uupload.ir/files/image_2023-02-14_09-28-25-removebg-preview_usmv.png"></img>
                      {moduleDetails ? moduleDetails.Title : ""}
                    </button>;
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
