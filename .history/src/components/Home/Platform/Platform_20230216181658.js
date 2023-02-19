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
          backgroundColor: props ?props.BackgroundColor : "",
        }}
      >
    props
      </div>
    </>
  );
}
