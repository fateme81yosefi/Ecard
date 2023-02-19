import React, { useContext } from "react";
import { DataContext } from "../../../shared/Shared";
import "./SocialMedia.css";
export default function SocialMedia() {
  let [Data, setData] = useContext(DataContext);
  const [x, setX] = useState([]);
  useEffect(() => {
    if (Data?.length) {
      setX(
        Data
          ? Data[4]
            ? Data[4].Module
              ? Data[4].Module[1]
                ? Data[4].Module[1].ModuleDetails
                  ? Data[4].Module[1].ModuleDetails
                  : ""
                : ""
              : ""
            : ""
          : ""
      );
    }
  }, [Data]);
  console.log(x);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {" "}
      <div className="containSocial">
        <span>
          {Data[4]
            ? Data[4].Module[0]
              ? Data[4].Module[0].ModuleDetails
                ? Data[4].Module[0].ModuleDetails[0]
                  ? Data[4].Module[0].ModuleDetails[0].Title
                    ? Data[4].Module[0].ModuleDetails[0].Title
                    : ""
                  : ""
                : ""
              : ""
            : ""}
        </span>
        <div className="containLogo">


        {x.map((item,) => (
            <img
            className="socialMediaLogo"
            src={x.ImageURL}
              alt="social1"
          />
        ))}
        
          <img
            className="socialMediaLogo"
            src={Data[4]
              ? Data[4].Module[1]
                ? Data[4].Module[1].ModuleDetails
                  ? Data[4].Module[1].ModuleDetails[1]
                    ? Data[4].Module[1].ModuleDetails[1].ImageURL
                      ? Data[4].Module[1].ModuleDetails[1].ImageURL
                      : ""
                    : ""
                  : ""
                : ""
              : ""}
              alt="social2"
          />
          
         
        </div>
      </div>
    </div>
  );
}
