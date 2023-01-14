import { useState, useCallback } from "react";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // vask0mu1jj2b6prni67btf7gr9t8qz;
  // "nm1c13pd5qgbuemxxlq6vwc3c12w2l";
  // Authorization: "Bearer vask0mu1jj2b6prni67btf7gr9t8qz",

  const commonHttpHeaders = {
    Accept: "application/json",
    "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
    Authorization: "Bearer 7qkaign1rf5i2rmz4jfyo46scw525f",
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
