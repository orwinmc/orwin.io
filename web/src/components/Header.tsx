import React, { CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Icon, { Icons } from './Icons'

/* Outermost Container for Header */
const $Header = styled('header')<{ isMenuOpen: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;

	max-width: 1250px;
	width: 100%;
	padding: 2em;
	font-family: 'Exo', sans-serif;

	/* Handle Safe Area */
	@supports (padding: max(0px)) {
		padding: max(env(safe-area-inset-bottom) + 1em, 2em) max(env(safe-area-inset-right) + 1em, 2em)
			max(env(safe-area-inset-bottom) + 1em, 2em) max(env(safe-area-inset-left) + 1em, 2em);
	}

	transition: color 400ms;
	${(props) =>
		props.isMenuOpen &&
		css`
			color: rgb(0, 0, 0);

			@media (prefers-color-scheme: dark) {
				color: rgba(255, 255, 255);
			}
		`}

	z-index:1;
`

const $Wordmark = styled(Link)`
	display: flex;
	align-items: center;

	font-size: 1.5em;
	font-weight: 700;
	color: currentColor;
	text-decoration: none;
`

const $Navigation = styled.nav`
	display: flex;
	align-items: center;
	text-transform: uppercase;
`

const $NavLink = styled(Link)<{ isMenuOpen: boolean }>`
	display: inline-block;
	margin-left: 2em;

	color: currentColor;
	text-decoration: none;

	transition: opacity 0.3s ease;
	&:hover {
		opacity: 0.4;
	}

	@media (max-width: 649px) {
		display: none;
	}

	${(props) =>
		props.isMenuOpen &&
		css`
			display: none;
		`}
`

const $LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	min-width: 1em;
	height: 1em;
	font-size: 2em;

	@media (min-width: 650px) {
		&#menu {
			display: none;
		}
	}
`

const $MenuButton = styled('button')<{ isMenuOpen: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;

	min-width: 1em;
	height: 1em;
	padding: 0;

	background: none;
	border: none;
	color: currentColor;
	font-size: 2em;

	${(props) =>
		!props.isMenuOpen &&
		css`
			@media (min-width: 650px) {
				display: none;
			}
		`}

	cursor: pointer;
	margin-left: 1em;
`

const $LogoType = styled.span`
	margin-left: 0.5em;
`

interface HeaderProps {
	style?: CSSProperties
	isMenuOpen: boolean
	toggleMenu: () => void
}

function Header({ style, isMenuOpen, toggleMenu }: HeaderProps) {
	return (
		<$Header style={style} isMenuOpen={isMenuOpen}>
			<$Wordmark href="/">
				<$LogoWrapper>
					<Icon icon={Icons.LOGO} />
				</$LogoWrapper>
				<$LogoType>Orwin.IO</$LogoType>
			</$Wordmark>
			<$Navigation>
				<$NavLink href="/about" isMenuOpen={isMenuOpen}>
					About
				</$NavLink>
				<$NavLink href="/development" isMenuOpen={isMenuOpen}>
					Portfolio
				</$NavLink>
				<$NavLink href="/photos" isMenuOpen={isMenuOpen}>
					Photography
				</$NavLink>
				<$MenuButton id="menu" onClick={() => toggleMenu()} isMenuOpen={isMenuOpen}>
					<Icon icon={Icons.MENU} />
				</$MenuButton>
			</$Navigation>
		</$Header>
	)
}

export default Header
