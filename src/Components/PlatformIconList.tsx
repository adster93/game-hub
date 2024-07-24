import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms} : Props) => {

    const iconMap: { [key: string] : IconType } = {
        Pc: FaWindows,
        ["PC (Microsoft Windows)"]: FaWindows,
        Playstation: FaPlaystation,
        ["PlayStation 5"]: FaPlaystation,
        ["PlayStation 4"]: FaPlaystation,
        ["PlayStation 3"]: FaPlaystation,
        ["PlayStation Vita"]: FaPlaystation,
        ["Xbox Series X|S"] : FaXbox,
        Xbox: FaXbox,
        Mac: FaApple,
        Linux: FaLinux,
        Android: FaAndroid,
        iOS: MdPhoneIphone,
        ["Nintendo Switch"]: SiNintendo,
        Web: BsGlobe
    }

  return (
    <HStack marginY='10px'>
        {platforms?.map(platform=>
        <Icon as={iconMap[platform.name]} color='gray.500'/>)
        }
    </HStack>
  )
}

export default PlatformIconList