import React, { useContext } from "react";
import "./Header.css";
import { DataContext } from "../../shared/Shared";

export default function Header(props) {
  let [Data, setData] = useContext(DataContext);

  return (
    <div className="contHeadLogo">
      {props.Module.map((module) => {
        switch (module.CategoryID) {
          case 1:
            <img
              className="logo"
              alt={
                module?module.ModuleDetails?module.ModuleDetails[0]?module.ModuleDetails[0].I:"":"":""
                // props
                //   ? props.Module
                //     ? props.Module[0]
                //       ? props.Module[0].ModuleDetails
                //         ? props.Module[0].ModuleDetails[0]
                //           ? props.Module[0].ModuleDetails[0].ImageAlt
                //             ? props.Module[0].ModuleDetails[0].ImageAlt
                //             : ""
                //           : ""
                //         : ""
                //       : ""
                //     : ""
                //   : ""
              }
              src={
                Data
                  ? Data[0]
                    ? Data[0].Module
                      ? Data[0].Module[0]
                        ? Data[0].Module[0].ModuleDetails
                          ? Data[0].Module[0].ModuleDetails[0]
                            ? Data[0].Module[0].ModuleDetails[0].ImageURL
                              ? Data[0].Module[0].ModuleDetails[0].ImageURL
                              : ""
                            : ""
                          : ""
                        : ""
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
