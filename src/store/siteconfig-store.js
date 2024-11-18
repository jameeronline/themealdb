import { create } from "zustand";

export const useSiteConfigStore = create(() => ({
  config: {
    details: "/details",
    categoryIndex: "beef",
    areaIndex: "america",
  },
}));
