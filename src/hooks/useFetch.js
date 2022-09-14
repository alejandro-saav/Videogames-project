import { useState, useCallback } from "react";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const commonHttpHeaders = {
    Accept: "application/json",
    "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
    Authorization: "Bearer 4wczrc1qwbmam0bejpj817cbvve3i7",
    "X-Requested-With": XMLHttpRequest,
  };

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers
          ? requestConfig.headers
          : commonHttpHeaders,
        // body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        body: requestConfig.body,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
