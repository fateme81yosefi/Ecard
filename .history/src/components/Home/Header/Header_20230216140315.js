import React, { useContext } from "react";
import "./Header.css";
import { DataContext } from "../../shared/Shared";

export default function Header(props) {
  let [Data, setData] = useContext(DataContext);

  return (
    <div className="contHeadLogo">
      {props.Module.map((module)=>{
        switch (module.CategoryID) {
          case 1:
            
            break;
        
          default:
            break;
        }
      })}
  
          
            

      <div
        className="circle"
        style={{
          backgroundColor: props ? props.BackgroundColor : "",
        }}
      ></div>
    </div>
  );
}
