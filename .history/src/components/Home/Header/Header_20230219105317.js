import React from "react";
import "./Header.css";

export default function Header(props) {
  
  
  
  function compare(a, b) {
    if (a.Priority < b.Priority) {
      return -1;
    }
    if (a.Priority > b.Priority) {
      return 1;
    }
    return 0;
  }

  D.sort(compare);
  console.log(D);

  
  return (

    <div className="contHeadLogo">
      {props.Module.map((module) => {
        switch (module.CategoryID) {
          case 1:
            return module.ModuleDetails.map((moduleDetails, index) => {
              switch (moduleDetails.Id) {
                case 1:

                  return (
                    <img
                      key={index}
                      className="logo"
                      alt={ moduleDetails?moduleDetails.ImageAlt :""}
                      src={moduleDetails?moduleDetails.ImageURL:"" }
                    />
                  );

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
