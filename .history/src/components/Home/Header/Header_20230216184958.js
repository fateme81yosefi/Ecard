import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="contHeadLogo">
      {props.Module.map((module) => {
        switch (module.CategoryID) {
          case 1:
            return (
              module.ModuleDetails.map((moduleDetails,index)=>{
                switch (moduleDetails.id) {
                  case 1:
                    return(
                      <img
                      className="logo"
                      alt={
                        
                   
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
                    />
                    )
                    
                
                  default:
                    break;
                }
              })
          
            );

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
