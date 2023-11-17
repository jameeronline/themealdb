// use-fetch-data.js
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (query) => {
  //const [requestURL, setRequestURL] = useState(query);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(query);
        setData(response.data);
      } catch (error) {
        // if (error.response) {
        //   // The request was made and the server responded with a status code
        //   // that falls out of the range of 2xx
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        // } else if (error.request) {
        //   // The request was made but no response was received
        //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //   // http.ClientRequest in node.js
        //   console.log(error.request);
        // } else {
        //   // Something happened in setting up the request that triggered an Error
        //   console.log("Error", error.message);
        //   setShowError(error.message);
        // }
        setShowError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [query]);

  return {
    data,
    loading,
    showError,
  };
};

export default useFetchData;
