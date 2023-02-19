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
        props.Module.map((item,index)=>{
          switch (item.CategoryID) {
            case 2:
              return   
              <div className="platformText">
              {Data[1]
                ? Data[1].Module
                  ? Data[1].Module[0].ModuleDetails
                    ? Data[1].Module[0].ModuleDetails[0].Subtitle
                    : ""
                  : ""
                : ""}
            </div>
           
              break;
          
            default:
              break;
          }
        })
      </div>
    </>
  );
}
