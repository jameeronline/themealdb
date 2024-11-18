import axios from "axios";

const BASE_URL = "https://cdn.contentful.com";
const SPACE_ID = `${import.meta.env.VITE_VERCEL_spaceID}`;
const ACCESS_TOKEN = `${import.meta.env.VITE_VERCEL_accessToken}`;
const ENVIRONMENT = "master";

const axiosContentful = axios.create({
  baseURL: `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/`,
  params: {
    access_token: ACCESS_TOKEN,
  },
});

export const getBlogEntries = async () => {
  return await axiosContentful
    .get(`entries`, {
      params: {
        content_type: "blog",
      },
    })
    .then((response) => response.data);
};

export const getSingleEntry = async (id) => {
  return await axiosContentful
    .get(`entries/${id}`)
    .then((response) => response.data);
};
