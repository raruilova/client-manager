import { useEffect, useState } from "react";

const useGetClients = (API) => {
  const [clients, setClients] = useState(API.length > 30 ? {} : []);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(!loading);
    try {
      const response = await fetch(API);
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  return [clients, loading];
};

export default useGetClients;
