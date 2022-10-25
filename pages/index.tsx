import Head from 'next/head'

import { NavigationBar } from '../components/NavigationBar'
import { Container, Flex } from '@chakra-ui/react'
import { TextStep } from '../components/TextStep'
import { VerticalStepScroll } from '../components/VerticalStepScroll'
import { useEffect, useState } from 'react'

export default function Homepage ()
{

    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => { setScrollY(window.scrollY) }

    useEffect(() => 
        {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
        }
    )

    return (
        <>

            <Head>
                <title>illumi - Homepage</title>
            </Head>

            <Flex
                h="220vh"
                w="100%"
                overflow="hidden"
                color="rgba(228, 228, 228)"
                scrollBehavior="smooth"
                bg="#121316"
            >

                <Container display="block" ml="25%" mt="20%" fontFamily="Fira Code">
                    
                    <VerticalStepScroll scrollY={scrollY}/>

                    <TextStep
                        title="i"
                        subTitle="know as illumi"
                        subTitleColor="#6b75ff"
                        titleFunctionStyle=".am()"
                        titleFunctionColor="#6b75ff"
                        description="A freelancer front-end and back-end developer based in France."
                    />
                    
                    <TextStep
                        title="about"
                        subTitle={null}
                        subTitleColor=""
                        titleFunctionStyle=".me()"
                        titleFunctionColor="#6b75ff"
                        description="I got 2 years ago interested by learning low-level languages & optimizing stuff and making interactive & dynamic app."
                    />
                </Container>

                <NavigationBar/>
            </Flex>
        </>
    )
}