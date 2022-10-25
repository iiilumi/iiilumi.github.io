import { Text } from "@chakra-ui/react"

export function NavigationElement ({ elementName })
{
    return (
        <>
            <Text bg="transparent" margin="8px" >
                {elementName}
            </Text>
        </>
    )
}