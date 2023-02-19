import React , {useEffect,useContext} from "react";
import Header from "./Header/Header";
import Platform from "./Platform/Platform";
import Access from "./Access/Access";
import Footer from "./Footer/Footer";
import { DataContext } from "../shared/Shared";
import "../Home/Home.css"
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
     console.log(Data)
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
    <div className="blueLine"></div>
      {/* <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      > */}



     
     {     Data.map((section , index)=>
{
            switch(section.ID) {
              case 1:
              console.log("1")
                break;
              case 2:
                console.log("1")

                break;
              case 3:
                break;
              default:
            }
}

          )}
          
{/*         
        <Header />
        <Platform />
        <Access /> */}
      {/* </div> */}
      <Footer />
    </>
  );
}
