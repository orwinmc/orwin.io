import Link from 'next/link'
import React, { CSSProperties } from 'react'

import styled from 'styled-components'
import Icon from './Icons'

const $HeaderContainer = styled.div`
	padding: 2em;
	@supports (padding: max(0px)) {
		padding: max(env(safe-area-inset-bottom), 2em) max(env(safe-area-inset-right), 2em)
			max(env(safe-area-inset-bottom), 2em) max(env(safe-area-inset-left), 2em);
	}
	color: rgb(255, 255, 255);
	display: flex;
	justify-content: center;
	font-family: 'Exo', sans-serif;
`

const $HeaderSectionContainer = styled.nav`
	max-width: 1200px;
	width: 100%;
	color: rgb(255, 255, 255);
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const $NavLink = styled(Link)`
	margin-left: 2em;
	cursor: pointer;
	display: inline-block;
	&:hover {
		opacity: 0.4;
	}
	transition: opacity 0.3s ease;
	color: white;
	text-decoration: none;
`

const $Wordmark = styled(Link)`
	color: rgba(255, 255, 255, 1);
	text-decoration: none;
	display: flex;
	align-items: center;
	font-size: 1em;
	left: 100px;
	font-size: 1.5em;
	font-weight: 700;
`

const $IconWrapper = styled.div`
	width: 1em;
	height: 1em;
	color: rgba(255, 255, 255, 1);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2em;
	left: 100px;
	@media (min-width: 799px) {
		&#menu {
			display: none;
		}
	}
`

const $LogoType = styled.span`
	margin-left: 0.5em;
`

const $RightNav = styled.nav`
	display: flex;
	align-items: center;
	text-transform: uppercase;
	@media (max-width: 800px) {
		display: none;
	}
`

interface NavigationProps {
	style?: CSSProperties
}

function Navigation({ style }: NavigationProps) {
	return (
		<$HeaderContainer style={style}>
			<$HeaderSectionContainer>
				<$Wordmark href="/">
					<$IconWrapper>
						<Icon type="logo" />
					</$IconWrapper>
					<$LogoType>Orwin.IO</$LogoType>
				</$Wordmark>
				<$RightNav>
					<$NavLink href="/about">About</$NavLink>
					<$NavLink href="/development">Portfolio</$NavLink>
					<$NavLink href="/photos">Photography</$NavLink>
				</$RightNav>
				<$IconWrapper id="menu">
					<Icon type="menu" />
				</$IconWrapper>
			</$HeaderSectionContainer>
		</$HeaderContainer>
	)
}

export default Navigation
