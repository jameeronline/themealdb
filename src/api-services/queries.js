import { useQuery, useQueries } from "@tanstack/react-query";
import {
  getRandomMeal,
  getList,
  getCategoryMeals,
  getAreaMeals,
  getIngredientMeals,
  getMealsBySearch,
  getMealDetails,
  getDetailedCategories,
} from "./api";

//contentful
import { getSingleEntry, getBlogEntries } from "./cms";

export const useRandomMeal = () => {
  return useQuery({
    queryKey: ["random"],
    queryFn: () => getRandomMeal(),
    staleTime: 5 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
  });
};

export const useDetailedCategories = () => {
  return useQuery({
    queryKey: ["categoriesDetailes"],
    queryFn: getDetailedCategories,
  });
};

export const useLists = (option) => {
  return useQuery({
    queryKey: ["lists", option],
    queryFn: () => getList(option),
    staleTime: 5 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
  });
};

export const useCategoryMeals = (option) => {
  return useQuery({
    queryKey: ["category", option],
    queryFn: () => getCategoryMeals(option),
  });
};

export const useAreaMeals = (option) => {
  return useQuery({
    queryKey: ["area", option],
    queryFn: () => getAreaMeals(option),
  });
};

export const useIngredientMeals = (option) => {
  return useQuery({
    queryKey: ["ingredient", option],
    queryFn: () => getIngredientMeals(option),
  });
};

export const useSearchMeals = (option) => {
  return useQuery({
    queryKey: ["search", option],
    queryFn: () => getMealsBySearch(option),
  });
};

export const useMealDetails = (id) => {
  return useQuery({
    queryKey: ["details", id],
    queryFn: () => getMealDetails(id),
  });
};

// CONTENTFUL CMS QUERIES
export const useSingleEntry = (id) => {
  return useQuery({
    queryKey: ["entry", id],
    queryFn: () => getSingleEntry(id),
    staleTime: 15 * (60 * 1000),
    cacheTime: 20 * (60 * 1000),
  });
};

// get All blog entries
export const useBlogEntries = () => {
  return useQuery({
    queryKey: ["entries-blog"],
    queryFn: getBlogEntries,
    staleTime: 15 * (60 * 1000),
    cacheTime: 20 * (60 * 1000),
  });
};
