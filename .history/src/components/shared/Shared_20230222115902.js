import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();
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
    <BrandContext.Provider value={[brand, setbrand]}>
      {props.children}
    </BrandContext.Provider>
  );
};