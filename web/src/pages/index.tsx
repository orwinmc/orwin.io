import React from 'react'
import styled, { keyframes, createGlobalStyle, css } from 'styled-components'
import Layout from '../components/Layout'

/* Main Container for the Entire Page */
const $Home = styled.div`
	width: max(100svw, 100dvw);
	height: max(100svh, 100dvh); // Mobile Safari 100vh Fix

	/* Eliminates scrollbars in Firefox, attempting to rendering SVG's outside of viewport */
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`

const $PreventScroll = createGlobalStyle`
    body:has(${$Home}) {
        overflow:hidden;
    }
`

const $Hero = styled.main`
	display: flex;
	margin: 0 auto;
	flex: 1;
	flex-direction: column;

	max-width: 1250px;
	width: 100%;
	padding: 2em 0em;

	/* Handle Safe Area */
	@supports (padding: max(0px)) {
		padding: 0 max(env(safe-area-inset-right) + 1em, 2em) 0 max(env(safe-area-inset-left) + 1em, 2em);
	}

	/* Positions the Hero Contents Proportionally on the Page */
	&:before {
		content: '';
		flex: 3;
	}

	&:after {
		content: '';
		flex: 1;
	}
`

const $HeroIntroduction = styled.h1`
	margin: 0;
	font-family: 'Exo', sans-serif;
	font-weight: 400;
	font-size: clamp(1.75em, min(6.5vh, 6.5vw), 2.5em);
`

const $HeroPurpose = styled.h2`
	margin: 0;
	font-family: 'Exo', sans-serif;
	font-weight: 200;
	font-size: clamp(0.9em, min(3.5vh, 3.5vw), 1.2em);
`

const $Name = styled.mark`
	font-weight: 700;
	text-decoration: underline;
	background: none;
	color: currentColor;
`

/* Layer to Blur the Moving Colors */
/* NOTE: Previously tried to position this absolutely and unable to due to Chrome not
   updating width and height on resize Instead it is now just wrapping the contents of
   the page. */
const $BlurLayer = styled.div`
	height: 100%;

	filter: blur(0px);
	backdrop-filter: blur(120px); // Firefox renders blurs poorly
	/* High Contrast Theme Adjustments */
	@media (prefers-contrast: more) {
		backdrop-filter: blur(120px) contrast(300); // contrast() function behaves strangely in
		background: rgba(0, 0, 0, 0.7); // Instead of brightness() function -> broken in Safari
	}

	transition: background 400ms;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const $UnderDevelopmentChip = styled.a`
	display: inline-block;

	padding: 0.25em 0.75em;
	margin-left: clamp(18em, min(20vh, 20vw), 25em);

	background-color: rgba(0, 80, 180, 0.6);
	width: fit-content;
	border-radius: 40px;
	font-size: clamp(0.7em, min(2.5vh, 2.5vw), 1em);
	color: white;
	text-decoration: none;

	/* Rotation animation */
	transition: transform 200ms ease-out;
	transform: rotate(-5deg);
	&:hover {
		transform: rotate(-10deg);
	}

	/* High Contrast Theme Adjustments */
	@media (prefers-contrast: more) {
		background-color: rgb(0, 60, 60, 0.6);
		border: 1px solid white;
	}

	@media (prefers-color-scheme: dark) {
		background: rgba(39, 121, 221, 0.6);
	}
`

const shiftPurpleBlob = keyframes`
	0% {
		transform: translate(5vw, 10vh) scale(0.5);
	}
	50% {
		transform: translate(-35vw, -30vh) scale(2.5);
	}
	100% {
		transform: translate(5vw, 10vh) scale(0.5);
	}
`

const shiftYellowBlob = keyframes`
	0% {
		transform: translate(0vw, -25vh) scale(0.95);
	}
	50% {
		transform: translate(15vw, -15vh) scale(0.3);
	}
	100% {
		transform: translate(0vw, -25vh) scale(0.95);
	}
`

const shiftPinkBlob = keyframes`
	0% {
		transform: translate(80vw, 100vh) scale(1);
	}
	50% {
		transform: translate(55vw, 50vh) scale(1.5);
	}
	100% {
		transform: translate(80vw, 100vh) scale(1);
	}
`

const shiftBlueBlob = keyframes`
	0% {
		transform: translate(25vw, 25vh) scale(0.3);
	}
	50% {
		transform: translate(60vw, -50vh) scale(1);
	}
	100% {
		transform: translate(25vw, 25vh) scale(0.3);
	}
`

const $ColorBlob = styled.div`
	width: min(100vh, 100vw);
	height: min(100vh, 100vw);
	position: absolute;
	border-radius: 50%;
	z-index: -2;

	&#purpleBlob {
		background: rgb(112, 20, 188);
		// fill: rgb(206, 160, 243);
		animation: ${shiftPurpleBlob} 11s infinite;

		@media (prefers-color-scheme: dark) {
			background: rgb(90, 12, 107);
		}
	}

	&#yellowBlob {
		background: rgb(201, 193, 16);
		//fill: rgb(241, 236, 149);
		animation: ${shiftYellowBlob} 12s infinite;

		@media (prefers-color-scheme: dark) {
			background: rgb(80, 111, 8);
		}
	}

	&#pinkBlob {
		background: rgb(238, 70, 154);
		//fill: rgb(241, 162, 202);
		animation: ${shiftPinkBlob} 13s infinite;

		@media (prefers-color-scheme: dark) {
			background: rgb(105, 30, 45);
		}
	}

	&#blueBlob {
		background: rgb(11, 140, 215);
		//fill: rgb(152, 206, 237);
		animation: ${shiftBlueBlob} 9s infinite;

		@media (prefers-color-scheme: dark) {
			background: rgb(5, 24, 106);
		}
	}
`

function Home() {
	return (
		<$Home>
			<$PreventScroll />
			<$ColorBlob id="purpleBlob" />
			<$ColorBlob id="yellowBlob" />
			<$ColorBlob id="pinkBlob" />
			<$ColorBlob id="blueBlob" />
			<$BlurLayer />
			<Layout>
				<$Hero>
					<$HeroIntroduction>
						Hi, I'm <$Name>Michael Orwin</$Name>
					</$HeroIntroduction>
					<$HeroPurpose>and welcome to my personal portfolio</$HeroPurpose>
					<$UnderDevelopmentChip href="https://github.com/orwinmc/orwin.io" target="_blank">
						Under Development
					</$UnderDevelopmentChip>
				</$Hero>
			</Layout>
		</$Home>
	)
}

export default Home
