import { Container } from "@chakra-ui/react"

export function VerticalStepScroll ({ scrollY })
{
    return (
        <Container style={{ height: scrollY }} 
            position="absolute" 
            marginLeft="-234px" 
            marginTop="98px" 
            borderLeft="2px solid #6b75ff" 
            display="inline-block"
        />
    )
}