import { Container, Text } from "@chakra-ui/react";

export function TextStep ({ title, titleFunctionStyle, titleFunctionColor, subTitle, subTitleColor, description })
{
    return (
        <>
            <Container margin="50px 0px 150%">

                <article style={
                    {
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        backgroundColor: "#121316",
                        border: "2px solid #6b75ff",
                        position: "absolute",
                        marginLeft: "-261.5px",
                        marginTop: "25px",
                    }
                }>

                </article>

                <Text fontWeight="bold" fontSize="55px">
                    {title}
                    <span style={{ color: titleFunctionColor }}>{titleFunctionStyle}</span>
                </Text>

                {subTitle ? <Text fontWeight="hairline" fontSize="20px" w="400px" color={subTitleColor}>{subTitle}</Text> : null }

                <Text fontWeight="hairline" fontSize="25px" w="700px">
                    {description}
                </Text>
            </Container>
        </>
    )
}