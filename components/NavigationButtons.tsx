import { Button, Container } from "@chakra-ui/react"

export function NavigationButtons ({ buttonsName })
{
    return (
        <Container 
            position="relative" 
            display="flex" 
            flexDirection="row-reverse" 
            alignItems="center"
        >
            <Button 
                borderRadius="100px" 
                bgColor="#232323" 
                border=" 1px solid hsla(0,0%,100%,0.05)" 
                fontSize="16.3" 
                fontWeight="500"
            >
                {buttonsName}
            </Button>
        </Container>
    )
}