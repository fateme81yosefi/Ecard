import React, { useContext } from "react";
import "./Header.css";
import { DataContext } from "../../shared/Shared";

export default function Header(props) {
  let [Data, setData] = useContext(DataContext);
{console.log()}
  return (
    <div className="contHeadLogo">
      {props.Module.map((module) => {
        switch (module.CategoryID) {
          case 1:
            <img
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
