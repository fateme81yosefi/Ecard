import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="contHeadLogo">
      {props.Module.map((module) => {
        switch (module.CategoryID) {
          case 1:
            return module.ModuleDetails.map((moduleDetails, index) => {
              switch (moduleDetails.id) {
                case 1:
                  return (
                    <img
                      className="logo"
                      alt={ moduleDetails.ImageAlt }
                      src={moduleDetails.ImageURL }
                    />
                  );
co
                default:
                  break;
              }
            });

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
