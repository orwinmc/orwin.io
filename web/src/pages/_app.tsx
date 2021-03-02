import { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Futura', sans-serif;
        margin: 0;
    }

    @media (max-width: 799px) {
        html {
            font-size: 12pt;
        }
    }

    @media (min-width: 800px) {
        html {
            font-size: 14pt;
        }
    }
`

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <GlobalStyles />
            <Component {...pageProps} />
        </Fragment>
    )
}

export default MyApp
