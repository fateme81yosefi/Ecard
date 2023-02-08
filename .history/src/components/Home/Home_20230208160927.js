import React , {useEffect,useContext} from "react";
import Header from "./Header/Header";
import Platform from "./Platform/Platform";
import Access from "./Access/Access";
import Footer from "./Footer/Footer";
import { DataContext } from "../shared/Shared";

export default function Home() {
  let [Data, setData] = useContext(DataContext);

  const GetData = async () => {
   try {

     const body = {
       CompanyName: "ParhamKish",
     };

     // const response = await fetch('Eclub/Getter', {
     //   method: 'GET',
     //   headers: {
     //     'Content-Type': 'application/json'
     //   },
     // })
     // Eclub/GetHomePageInfo
     const response = await fetch("Ecard/GetHomePageInfo", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
       // body: JSON.stringify(body)
     });

     // console.log("response = ", response);
     if (!response.ok) throw new Error("nashod");

     let result = await response.json();
     Data = result.Section;
     setData(Data)
    //  console.log(Data)
     
     // console.log("result = ", result.Section);
     // fetch('controller/methodName', {
     // fetch('Eclub/GetHomePageInfo', {
     //   method: 'GET',
     //   headers: {
     //     'Content-Type': 'application/json'
     //   }
     // })
     // .then(response => response.json())
     // .then(result => {
     //   console.log('result = ', result)
     // })
   } catch (err) {
     console.log("err = ", err);
   } finally {
   }
 };

 useEffect(() => {
   GetData()
   console.log(Data)
 }, []);

  return (
    <>
    <div className="b"></div>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Platform />
        <Access />
      </div>
      <Footer />
    </>
  );
}
