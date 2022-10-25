import { Box } from "@chakra-ui/react"

export function NavigationIcon ({ iconUrl })
{
    return (
        <Box 
            bg="transparent"
            bgImage={iconUrl}
            bgSize="35px 35px"
            borderRadius="50%"
            h="35px"
            w="35px"
            margin="0px 15.5px"
            padding="17.5px 17.5px"
        />
    )
}