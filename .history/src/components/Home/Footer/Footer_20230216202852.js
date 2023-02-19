import Reactfrom "react";
import "./Footer.css";
import Ways from "./Ways/Ways";
import SocialMedia from "./SocialMedia/SocialMedia";
import { DataContext } from "../../shared/Shared";

export default function Footer() {

  return (
    <div
      className="containFooter"
      style={{
        backgroundColor: Data[4] ? Data[4].BackgroundColor : "",
      }}
    >
      <Ways />
      <SocialMedia />
      <br />
    </div>
  );
}
