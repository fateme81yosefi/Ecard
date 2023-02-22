import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export const DataProvider = (props) => {
  

  let [Data, setData] = useState({});

  
  return (
    <DataContext.Provider value={[Data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
export const BrandProvider = (props) => {
  

  let [brand, setbrand] = useState({});

  
  return (
    <DataContext.Provider value={[brand, setbrand]}>
      {props.children}
    </DataContext.Provider>
  );
};