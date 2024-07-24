import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { checkImage } from "./GameCard";
import Adventure from "../assets/Adventure.png";
import Arcade from "../assets/Arcade.png";
import CardGame from "../assets/CardGame.png";
import Fighting from "../assets/Fighting.png";
import HackSlash from "../assets/HackSlash.png";
import Indie from "../assets/Indie.png";
import MOBA from "../assets/MOBA.png";
import Music from "../assets/Music.png";
import Pinball from "../assets/Pinball.png";
import Platform from "../assets/Platform.png";
import PointAndClick from "../assets/PointAndClick.png";
import Puzzle from "../assets/Puzzle.png";
import Quiz from "../assets/Quiz.png";
import Racing from "../assets/Racing.png";
import RolePlaying from "../assets/RolePlaying.png";
import RTS from "../assets/RTS.png";
import Shooter from "../assets/Shooter.png";
import Simulator from "../assets/Simulator.png";
import Sport from "../assets/Sport.png";
import Strategy from "../assets/Strategy.png";
import Tactical from "../assets/Tactical.png";
import TurnBased from "../assets/TurnBased.png";
import VisualNovel from "../assets/VisualNovel.png";

const genreMap: { [key: string]: string } = {
  ["Adventure"]: Adventure,
  ["Arcade"]: Arcade,
  ["Card & Board Game"]: CardGame,
  ["Fighting"]: Fighting,
  ["Hack and slash/Beat 'em up"]: HackSlash,
  ["Indie"]: Indie,
  ["MOBA"]: MOBA,
  ["Music"]: Music,
  ["Pinball"]: Pinball,
  ["Platform"]: Platform,
  ["Point-and-click"]: PointAndClick,
  ["Puzzle"]: Puzzle,
  ["Quiz/Trivia"]: Quiz,
  ["Racing"]: Racing,
  ["Role-playing (RPG)"]: RolePlaying,
  ["Real Time Strategy (RTS)"]: RTS,
  ["Shooter"]: Shooter,
  ["Simulator"]: Simulator,
  ["Sport"]: Sport,
  ["Strategy"]: Strategy,
  ["Tactical"]: Tactical,
  ["Turn-based strategy (TBS)"]: TurnBased,
  ["Visual Novel"]: VisualNovel,
};

const GenreList = () => {
  const { data, isLoading, error} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genreMap[genre.name]}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
