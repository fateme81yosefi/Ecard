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
          switch (item.C) {
            case value:
              
              break;
          
            default:
              break;
          }
        })
      </div>
    </>
  );
}
