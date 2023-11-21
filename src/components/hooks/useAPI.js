import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (initialUrl, initialData = null) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false on component unmount
    return () => {
      isMounted = false;
    };
  }, [url]);

  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };

  return { data, error, isLoading, updateUrl };
};

export default useApi;
