import React from "react";

export const useFetch = (url, options) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function response(url, options, method) {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(url, options);
      if(method !== "DELETE"){
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      setError("error");
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    response(url, options);
  }, [url, options]);

  return {
    data,
    loading,
    error,
    response,
  };
};
