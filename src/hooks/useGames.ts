import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    screenshots?: Screenshot[];
    platforms?: Platform[];
    aggregated_rating: number|string;
}

interface Screenshot {
    image_id: string;
    url: string;
}

export interface Platform {
    id: number
    name: string
}

// interface FetchGamesResponse {
//     results: Game[];
// }


const useGames = () =>  {
  
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {    

    const controller = new AbortController();

    setLoading(true);
    apiClient.get<Game[]>('/games', { signal: controller.signal})
      .then((response) => {
        setGames(response.data)
        setLoading(false);
      })
    .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
    })

    return () => controller.abort();
  }, [])
  
  return {games, error, isLoading}; 
}

export default useGames;