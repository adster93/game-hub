import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Genre {
    id: number;
    name: string; 
}



const useGenres = () =>  {
  
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {    
        console.log("inside genre effect");
        
      const controller = new AbortController();
  
      setLoading(true);
      apiClient.get<Genre[]>('/genres', { signal: controller.signal})
    // apiClient.get<FetchGenresResponse>('/genres')
        .then((response) => {
            console.log("setting genres", response.data);
            
          setGenres(response.data)
          setLoading(false);
        })
      .catch((err) => {
          if(err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false)
      })
  
      return () => controller.abort();
    }, [])
    
    return {genres, error, isLoading}; 
  }
  
  export default useGenres;