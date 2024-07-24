import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


const useData = <T>(endpoint: string) =>  {
  
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {    
        console.log("inside genre effect");
        
      const controller = new AbortController();
  
      setLoading(true);
      apiClient.get<T[]>(endpoint, { signal: controller.signal})
        .then((response) => {
            console.log("setting data", response.data);

          setData(response.data)
          setLoading(false);
        })
      .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false)
      })
  
      return () => controller.abort();
    }, [])
    
    return {data, error, isLoading}; 
  }
  
  export default useData;