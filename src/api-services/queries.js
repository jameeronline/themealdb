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

export const useRandomMeal = () => {
  return useQuery({
    queryKey: ["random"],
    queryFn: () => getRandomMeal(),
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
