import { useEffect, useState } from "react";

const useGetClients = (API) => {
  const [clients, setClients] = useState(API.length > 30 ? {} : []);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoading(!loading);
    }, 1500);
    
  }, []);

  return [clients, loading];
};

export default useGetClients;
