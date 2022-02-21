import { AppProps } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0em;
    }

    @media (max-width: 1099px) {
        html {
            font-size: 12pt;
        }
    }

    @media (min-width: 1100px) {
        html {
            font-size: 13pt;
        }
    }
    @media (min-width: 1600px) {
        html {
            font-size: 14pt;
        }
    }
`

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
