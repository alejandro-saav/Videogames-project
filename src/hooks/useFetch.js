import { useState, useCallback } from "react";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const commonHttpHeaders = {
    Accept: "application/json",
    "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
    Authorization: "Bearer 452vo9465pxfgrfc39f0373ce4998p",
    // "X-Requested-With": XMLHttpRequest,
    "Access-Control-Allow-Origin": "*",
  };

  //* NEW API KEY = f9a75a49974649c7a1520b3e7fc70197

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
      // console.log(response);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      console.log(err);
      if (err.message == "Failed to fetch") {
        setError("Cors error");
      } else {
        setError(err.message || "Something went wrong!");
      }
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
