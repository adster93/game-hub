import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  screenshots?: Screenshot[];
  platforms?: Platform[];
  aggregated_rating: number | string;
}

interface Screenshot {
  image_id: string;
  url: string;
}

export interface Platform {
  id: number;
  name: string;
}

const useGames = () => useData<Game>("/games");

export default useGames;
