import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '../components/Layout'

export default function App ({ Component, pageProps, router }) 
{
    return ( <ChakraProvider> <Layout router={router}/> <Component { ...pageProps }/></ChakraProvider>)
}