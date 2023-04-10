import React from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

/* Main Container for the Entire Page */
const $Home = styled.div`
	width: max(100svw, 100dvw);
	height: max(100svh, 100dvh); // Mobile Safari 100vh Fix

	/* Eliminates scrollbars in Firefox, attempting to rendering SVG's outside of viewport */
	position: relative;
	overflow: hidden;
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

	position: relative;
	z-index: 2;
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

const $Name = styled.span`
	font-weight: 700;
	text-decoration: underline;
`

/* Layer to Blur the Moving Colors */
/* NOTE: Previously tried to position this absolutely and unable to due to Chrome not
   updating width and height on resize Instead it is now just wrapping the contents of
   the page. */
const $BlurLayer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: max(100svh, 100dvh);

	backdrop-filter: blur(120px); // Firefox renders blurs poorly

	/* High Contrast Theme Adjustments */
	@media (prefers-contrast: more) {
		backdrop-filter: blur(120px) contrast(300); // contrast() function behaves strangely in
		background: rgba(0, 0, 0, 0.7); // Instead of brightness() function -> broken in Safari
	}

	z-index: 1;
`

/* Positions the Hero Contents Proportionally on the Page */
const $Buffer = styled.div`
	&#topBuffer {
		flex: 3;
	}

	&#bottomBuffer {
		flex: 1;
	}
`

const $UnderDevelopmentChip = styled.a`
	display: inline-block;

	padding: 0.25em 0.75em;
	margin-left: clamp(18em, min(20vh, 20vw), 25em);

	background-color: rgba(0, 80, 180, 0.6);
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
`

const shiftPurple = keyframes`
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

const shiftYellow = keyframes`
	0% {
		transform: translate(0vw, -25vh) scale(0.95);
	}
	50% {
		transform: translate(15vw, -15vh) scale(0.3);
	}
	100% {
		transform: translate(0vw, -25vh) scale(0.9);
	}
`

const shiftPink = keyframes`
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

const shiftBlue = keyframes`
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

const $CircleSVG = styled.svg`
	width: min(100vh, 100vw);
	height: min(100vh, 100vw);
	position: absolute;

	&#purpleSVG {
		fill: rgb(112, 20, 188);
		//fill: rgb(206, 160, 243);
		animation: ${shiftPurple} 11s infinite;
	}

	&#yellowSVG {
		fill: rgb(201, 193, 16);
		//fill: rgb(241, 236, 149);
		animation: ${shiftYellow} 12s infinite;
	}

	&#pinkSVG {
		fill: rgb(238, 70, 154);
		//fill: rgb(241, 162, 202);
		animation: ${shiftPink} 13s infinite;
	}

	&#blueSVG {
		fill: rgb(11, 140, 215);
		//fill: rgb(152, 206, 237);
		animation: ${shiftBlue} 9s infinite;
	}
`

function Home() {
	return (
		<$Home>
			<$PreventScroll />
			<$CircleSVG id="purpleSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50" />
			</$CircleSVG>
			<$CircleSVG id="yellowSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50" />
			</$CircleSVG>
			<$CircleSVG id="pinkSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50" />
			</$CircleSVG>
			<$CircleSVG id="blueSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="50" />
			</$CircleSVG>
			<$BlurLayer>
				<Header style={{ position: 'relative', zIndex: 3 }} />
				<$Hero>
					<$Buffer id="topBuffer" />
					<div>
						<$HeroIntroduction>
							Hi, I'm <$Name>Michael Orwin</$Name>
						</$HeroIntroduction>
						<$HeroPurpose>and welcome to my personal portfolio</$HeroPurpose>
						<$UnderDevelopmentChip href="https://github.com/orwinmc/orwin.io" target="_blank">
							Under Development
						</$UnderDevelopmentChip>
					</div>
					<$Buffer id="bottomBuffer" />
				</$Hero>
				<Footer style={{ position: 'relative', zIndex: 3 }} />
			</$BlurLayer>
		</$Home>
	)
}

export default Home
