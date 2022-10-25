import { Box } from '@chakra-ui/react'
import { NavigationIcon } from './NavigationIcon'
import { NavigationElement } from './NavigationElement'
import { NavigationButtons } from './NavigationButtons'

export function NavigationBar ()
{
    
    return (
        
        <Box 
            display="flex"
            position="fixed"
            flexDirection="row"
            alignItems="center"
            cursor="pointer"
            top="4%"
            left="32%"
            borderRadius="100px"
            bg="rgb(25, 25, 25, 0.898)"
            border="1px solid #232323"
            backdropFilter="blur(5px)"
            color="gray"
            transition=".3s"
            h="55px" 
            w="700px"
            fontSize="16px"
            fontWeight="500"
            fontFamily="Fira Code, sans serif"
        >
        
            <NavigationIcon iconUrl={'url("https://avatars.githubusercontent.com/illum1ii")'}/>
            
            <NavigationElement elementName={".home()"}/>
            <NavigationElement elementName={".work()"}/>
            <NavigationButtons buttonsName={".contact()"}/>
        
        </Box>
    )
} 