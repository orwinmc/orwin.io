import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing:border-box;
	}
	
	html {
		-webkit-text-size-adjust: 100%;
	}

	body {
		font-family: 'Nunito', sans-serif;
		margin: 0em;
		color: rgb(255, 255, 255);
        //color:rgba(0,0,100,1);
		background: rgb(5, 168, 124);
        //background:white;
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
			<Head>
				<title>Orwin.IO</title>
				<meta name="viewport" content="viewport-fit=cover, width=device-width" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="viewport" content="viewport-fit=cover, width=device-width" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta name="theme-color" content="#fff" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
