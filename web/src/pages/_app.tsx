import { AppProps } from 'next/app'
import Head from 'next/head'
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
            font-size: 14pt;
        }
    }
    @media (min-width: 1600px) {
        html {
            font-size: 18pt;
        }
    }
`

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />

                <link rel="apple-touch-icon" href="logo192.png" />
                <link rel="manifest" href="manifest.json" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
                <title>orwin.io</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
