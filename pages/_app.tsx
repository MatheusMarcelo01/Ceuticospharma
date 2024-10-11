import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../components/Contexts/SidebarDrawerContext'
import * as React from "react";



function MyApp({ Component, pageProps}: AppProps) {
    return (
    
    <ChakraProvider theme={theme}> 
    <SidebarDrawerProvider>
        <Component {...pageProps} />
    </SidebarDrawerProvider>

    </ChakraProvider>
    
    )
}

  

export default MyApp