import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';



const GameGrid = () => {
  
  const {games, error} = useGames()  
  console.log("games", games)
    return (
      <>
      {error && <Text>{error}</Text>}
    <SimpleGrid columns={4} spacing={10}>
        {games.map(game => <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid