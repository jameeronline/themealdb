import { createContext } from "react";

export const SiteConfigContext = createContext();

const SiteConfigProvider = ({ children }) => {
  const config = {
    details: "/details",
    categoryIndex: "beef",
    areaIndex: "america",
  };

  return (
    <SiteConfigContext.Provider value={{ config: config }}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export default SiteConfigProvider;
