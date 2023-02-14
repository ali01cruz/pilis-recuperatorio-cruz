import { createContext, useState } from "react";

export const ObjFilterContext = createContext({
  objFilter: [],
  setObjFilter: () => {}
})

export const ObjFilterProvider = ({ children }) => {
  const [objFilter, setObjFilter] = useState([]);
  const value = { objFilter, setObjFilter };
  return <ObjFilterContext.Provider value={value}>{children}</ObjFilterContext.Provider>;
}