import React from 'react'
import styled, { keyframes } from 'styled-components'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { createGlobalStyle } from 'styled-components'
import Icon from '../components/Icons'

const $Home = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: relative;
	height: max(100svh, 100dvh);
`

const $PreventScroll = createGlobalStyle`
    body:has(${$Home}) {
        overflow:hidden;
    }
`

const $HeroText = styled.div``

const $HeroIntroduction = styled.div`
	font-family: 'Exo', sans-serif;
	font-size: clamp(1.75em, 4vw, 2.75em);
	font-weight: 400;
	@media (max-height: 400px) {
		display: inline-block;
		font-size: clamp(1.5em, 3vw, 2.75em);
	}
`

const $HeroPurpose = styled.div`
	font-family: 'Exo', sans-serif;
	font-weight: 200;
	font-size: clamp(0.9em, 2.5vw, 1.4em);
	@media (max-height: 400px) {
		display: inline-block;
		margin-left: 0.5em;
		font-size: clamp(0.9em, 2.25vw, 1.4em);
	}
`

const $Name = styled.span`
	font-family: 'Exo', sans-serif;
	font-weight: 700;
	text-decoration: underline;
	//font-size: 1.35em;
`

const $Hero = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	padding: 2em 0em;
	@supports (padding: max(0px)) {
		padding: 0 max(env(safe-area-inset-right), 2em) 0 max(env(safe-area-inset-left), 2em);
	}
`

const $HeroCenter = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
`

const $BlurBackdrop = styled.div`
	backdrop-filter: blur(120px);
	-webkit-backdrop-filter: blur(120px);
	height: max(100svh, 100dvh);
	display: flex;
	flex-direction: column;
`

const $TopBuffer = styled.div`
	flex: 3;
`

const $BottomBuffer = styled.div`
	flex: 1;
`

const $UnderDevelopmentChip = styled.a`
	display: inline-block;
	margin-left: clamp(18em, 40vw, 22em);
	background-color: rgb(0, 80, 180, 0.6);
	border-radius: 40px;
	padding: 0.25em 0.75em;
	font-size: clamp(0.7em, 1.7vw, 1em);
	transform: rotate(-5deg);
	&:hover {
		transform: rotate(-10deg);
	}
	transition: transform 200ms ease-out;
	color: white;
	text-decoration: none;

	@media (max-height: 400px) {
		margin-left: clamp(35em, 60vw, 45em);
	}
`

const $SVGLine = styled.svg`
	& #line {
		&:hover {
			stroke: rgba(240, 150, 255, 0.75);
			stroke-width: 24;
			transform: translate(30px);
		}
		transition: stroke 200ms ease-out, stroke-width 200ms ease-out, transform 200ms ease-out;
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

const $PurpleCircleSVG = styled.svg`
	width: min(100vh, 100vw);
	height: min(100vh, 100vw);
	fill: rgb(112, 20, 188);
	position: absolute;
	//transform: translate(100px, 250px);
	animation: ${shiftPurple} 11s infinite;
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

const $YellowCircleSVG = styled.svg`
	width: min(100vh, 100vw);
	height: min(100vh, 100vw);
	fill: rgb(201, 193, 16);
	position: absolute;
	//transform: translate(100px, 250px);
	animation: ${shiftYellow} 12s infinite;
`

const shiftPink = keyframes`
	/* 0% {
		transform: translate(1100px, 700px) scale(2.5);
	}
	50% {
		transform: translate(1100px, 1000px) scale(0.5);
	}
	100% {
		transform: translate(1100px, 700px) scale(2.5);
	} */
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

const $PinkCircleSVG = styled.svg`
	width: min(100vh, 100vw);
	height: min(100vh, 100vw);
	fill: rgb(238, 70, 154);
	position: absolute;
	animation: ${shiftPink} 13s infinite;
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

const $BlueCircleSVG = styled.svg`
	width: min(100vh, 100vw);
	height: min(100vh, 100vw);
	fill: rgb(11, 140, 215);
	position: absolute;
	//transform: translate(100px, 250px);
	animation: ${shiftBlue} 9s infinite;
`

// <$PreventScroll />

function Home() {
	return (
		<>
			<$Home>
				<$PurpleCircleSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="50" />
				</$PurpleCircleSVG>
				<$YellowCircleSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="50" />
				</$YellowCircleSVG>
				<$PinkCircleSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="50" />
				</$PinkCircleSVG>
				<$BlueCircleSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="50" />
				</$BlueCircleSVG>
				<$BlurBackdrop>
					<Navigation />
					<$Hero>
						<$HeroCenter>
							<$TopBuffer />
							<$HeroText>
								<$HeroIntroduction>
									Hi, I'm <$Name>Michael Orwin</$Name>
								</$HeroIntroduction>
								<$HeroPurpose>and welcome to my personal portfolio</$HeroPurpose>
								<$UnderDevelopmentChip href="https://github.com/orwinmc/orwin.io" target="_blank">
									Under Development
								</$UnderDevelopmentChip>
							</$HeroText>
							<$BottomBuffer />
						</$HeroCenter>
					</$Hero>
					<Footer />
				</$BlurBackdrop>
			</$Home>
		</>
	)
}

/*
<$SVGLine
							style={{
								width: '1500',
								height: '30',
								position: 'absolute',
								stroke: 'rgba(217, 217, 217, 0.3)',
								alignmentBaseline: 'middle',
								zIndex: 1,
								top: 200,
								left: 800,
							}}
							id="line"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1500 20"
						>
							<path id="line" d="M20,10 L1480,10 z" stroke-linejoin="round" stroke-width="16" />
						</$SVGLine>
*/

export default Home
