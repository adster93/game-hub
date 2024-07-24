import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import noImage from '../assets/no-image.jpg';
import PlatformIconList from './PlatformIconList';


interface Props {
    game: Game
}

function checkImage(game : Game) {
    if(game.screenshots) {
        return "https://images.igdb.com/igdb/image/upload/t_1080p/"+game.screenshots[0].image_id+".jpg"
    } else {
        return noImage
    }
}

const GameCard = ({game} : Props) => {
    return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={checkImage(game)} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading> 
            <PlatformIconList key={game.id} platforms={game.platforms ? game.platforms : []} />  
            {/* {game.platforms.map(platform=><Text>{platform.name}</Text>)} */}
            
        </CardBody>
    </Card>
  )
}



export default GameCard