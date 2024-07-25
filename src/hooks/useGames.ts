import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre : Genre | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
