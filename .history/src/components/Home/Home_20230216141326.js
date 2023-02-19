import React, { useEffect, useContext } from "react";
import Header from "./Header/Header";
import Platform from "./Platform/Platform";
import Access from "./Access/Access";
import Footer from "./Footer/Footer";
import Ways from "./Footer/Ways/Ways";
import SocialMedia from "./Footer/SocialMedia/SocialMedia";
import { DataContext } from "../shared/Shared";
import "../Home/Home.css";
import { useState } from "react";
export default function Home() {
  let [Data, setData] = useContext(DataContext);

  const [D,setD]=useState([]);

  const GetData = async () => {
    try {
      const body = {
        CompanyName: "ParhamKish",
      };

      const response = await fetch("Ecard/GetHomePageInfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("nashod");

      let result = await response.json();
      Data = result.Section;
      setData(Data);
      console.log(Data);
      setD(Data)
    } catch (err) {
      console.log("err = ", err);
    } finally {
    }
  };

  useEffect(() => {
    GetData();
    console.log(Data);
  }, []);

  return (
    <>
      <div className="blueLine"></div>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >

       {D.map((section, index) => {
        switch (section.ID) {
          case 1:
            console.log("1");
           <Header {...section}/>
            break;

          case 2:
            console.log("2");
            <Platform {...section} />;
            break;

          case 3:
            console.log("3");
            <Access {...section}/>;
            break;

          case 4:
            console.log("4");
            <div
              className="containFooter"
              style={{
                backgroundColor: section.BackgroundColor,
              }}
            >
              <Ways {...section}/>
            </div>;
            break;

          case 5:
            console.log("5");
            <div
              className="containFooter"
              style={{
                backgroundColor: section.BackgroundColor,
              }}
            >
              <SocialMedia {...section}/>
              <br />
            </div>;
            break;

          default:
        }
      })} 

   
      </div>
    </>
  );
}
