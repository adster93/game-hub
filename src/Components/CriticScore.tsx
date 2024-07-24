import { Badge } from '@chakra-ui/react'

interface Props {
  score: number | string; 
}

const CriticScore = ({score} : Props) => {

  function findColor(score : number | string) {
    if(typeof(score) === 'number') {
      let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''; 
      return color;
    } else {
      return '';
    }
  }
  
    
  

  return (
    <>
    <Badge colorScheme={findColor(score)} fontSize='14px' padding={2} borderRadius='4px'>{score}</Badge>
    </>
  )
}

export default CriticScore