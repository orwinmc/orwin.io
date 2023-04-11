import React, { ReactElement, ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

const $Menu = styled('div')<{ isMenuOpen: boolean }>`
	position: absolute;
	width: 100%;
	height: 100%;
	background: transparent;
	backdrop-filter: blur(0px);
	filter: blur(0px);
	opacity: 0%;

	z-index: -1;

	transition: background 400ms, backdrop-filter 400ms, opacity 400ms, z-index 0s 400ms;

	${(props) =>
		props.isMenuOpen &&
		css`
			z-index: 0;
			background: rgba(255, 255, 255, 0.65);
			backdrop-filter: blur(30px);
			filter: blur(0px);
			transition: background 400ms, backdrop-filter 400ms, opacity 400ms, z-index 0s 0s;
			opacity: 100%;
			color: black;

			@media (prefers-color-scheme: dark) {
				background: rgba(0, 0, 0, 0.65);
			}
		`}
`

interface MenuProps {
	isMenuOpen: boolean
}

function Menu({ isMenuOpen }: MenuProps): ReactElement {
	return <$Menu isMenuOpen={isMenuOpen}></$Menu>
}

export default Menu
