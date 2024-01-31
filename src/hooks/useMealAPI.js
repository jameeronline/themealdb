import useSWR from "swr";
import axios from "axios";

//Helper functions
//import { fetcher } from "src/utils/helperFunc";
//const fetcher = (url) => axios.get(url).then((res) => res.data);

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_VERCEL_API_URL}`,
});

const fetcher = (url) => {
  //   const response = await axiosInstance.get(url);
  //   return response.data;

  return axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => error);
  //.finally(() => console.log("completed"));
};

// Fetcher function for useSWR
// const fetcher = async (url) => {
//   console.log("hooks called");
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return response.json();
// };

export default function useMealsAPI(url, options = {}) {
  const API_URL = `${import.meta.env.VITE_VERCEL_API_URL}${url}`;

  const { data, error, isLoading, mutate } = useSWR(API_URL, fetcher, {
    ...options,
    revalidateOnFocus: false, // Disable automatic refetching on focus
  });

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}
