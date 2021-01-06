import { useState, useEffect } from "react";

export default (url) => {
  const [data, setData] = useState({
    response: null,
    error: false,
    loading: true,
  });

  useEffect(() => {
    setData({ ...data, error: null, loading: true });
    fetch(url)
      .then(async (response) => {
        const data = await response.text();
        setTimeout(() => {
          setData({
            response: data,
            error: !response.ok,
            loading: false,
          });
        }, 1000);
      })
      .catch((error) => {
        //fetch throws an error only on network failure or if anything prevented the request from completing
        setData({
          response: { status: "network_failure" },
          error: true,
          loading: false,
        });
      });
  }, [url]);

  return data;
};
