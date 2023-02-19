import React, { useContext } from "react";
import "./Header.css";
import { DataContext } from "../../shared/Shared";

export default function Header(props) {
  let [Data, setData] = useContext(DataContext);


  console.log(props.Module)
  return (
    <div className="contHeadLogo">
      {props.Module.map((module) => {
        switch (module.CategoryID) {
          case 1:
          return  <img
              className="logo"
              alt={
                module
                  ? module.ModuleDetails
                    ? module.ModuleDetails[0]
                      ? module.ModuleDetails[0].ImageAlt
                      : ""
                    : ""
                  : ""
              }
              src={
                module
                  ? module.ModuleDetails
                    ? module.ModuleDetails[0]
                      ? module.ModuleDetails[0].ImageURL
                      : ""
                    : ""
                  : ""
              }
            />;

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
