import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    screenshots?: Screenshot[];
    platforms?: Platform[];
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

  useEffect(() => {    

    const controller = new AbortController();

    apiClient.get<Game[]>('/games', { signal: controller.signal})
      .then(response => setGames(response.data))

    .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    })

    return () => controller.abort();
  }, [])
  
  return {games, error}; 
}

export default useGames;