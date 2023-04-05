import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { createGlobalStyle } from 'styled-components'
import Icon from '../components/Icons'

const $Home = styled.div`
	display: flex;
	flex-direction: column;
	background: black;
	overflow: hidden;
	position: relative;
`

const $PreventScroll = createGlobalStyle`
    body:has(${$Home}) {
        overflow:hidden;
    }
`

const $HeroText = styled.div``

const $HeroIntroduction = styled.span`
	font-family: 'Exo', sans-serif;
	font-size: clamp(1.6em, 4vw, 2.4em);
	font-weight: 200;
`

const $HeroPurpose = styled.span`
	font-family: 'Exo', sans-serif;
	font-weight: 100;
	font-size: clamp(1em, 2.5vw, 1.5em);
`

const $Name = styled.span`
	font-family: 'Exo', sans-serif;
	font-weight: 700;
	text-decoration: underline;
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
	background: rgba(0, 0, 0, 0.01);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(120px);
	z-index: 1;
	height: -webkit-fill-available;
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
	background-color: rgb(4, 80, 180, 0.5);
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
`

const $SVGLine = styled.svg`
	& #line {
		&:hover {
			stroke: rgba(240, 180, 255, 0.4);
			stroke-width: 24;
			transform: translate(30px);
		}
		transition: stroke 200ms ease-out, stroke-width 200ms ease-out, transform 200ms ease-out;
	}
`

function Home() {
	return (
		<>
			<$PreventScroll />
			<$Home>
				<svg
					style={{
						width: '1500',
						height: '1500',
						position: 'absolute',
						fill: 'purple',
						alignmentBaseline: 'middle',
						zIndex: 1,
					}}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
				>
					<defs>
						<g id="logo-square">
							<polygon points="0,0 20,0 20,20 0,20" />
						</g>
					</defs>
					<use
						href="#logo-square"
						fill="rgb(201, 193, 16)"
						transform="translate(35,15) rotate(50)"
						transform-origin="10 10"
					/>
					<use
						href="#logo-square"
						fill="rgb(232, 122, 188)"
						transform="translate(40,45) rotate(10)"
						transform-origin="10 10"
					/>
					<use
						href="#logo-square"
						fill="rgb(122, 56, 188)"
						transform="translate(5,15) rotate(80)"
						transform-origin="10 10"
					/>
				</svg>
				<$BlurBackdrop>
					<Navigation />
					<$Hero>
						<$HeroCenter>
							<$TopBuffer />
							<$HeroText>
								<$HeroIntroduction>
									Hi, I'm <$Name>Michael Orwin</$Name>
								</$HeroIntroduction>
								<br />
								<$HeroPurpose>and welcome to my personal portfolio</$HeroPurpose>
								<br />
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
