import React, { ReactElement, ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

const $Menu = styled('div')<{ isMenuOpen: boolean }>`
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0%;
	background: transparent;

	z-index: -1;

	${(props) =>
		props.isMenuOpen &&
		css`
			z-index: 0;
			background: rgba(255, 255, 255, 0.65);
			backdrop-filter: blur(30px);
			opacity: 100%;

			@media (prefers-color-scheme: dark) {
				background: rgba(0, 0, 0, 0.65);
			}
		`}

	transition: background 400ms, opacity 400ms;
`

interface MenuProps {
	isMenuOpen: boolean
}

function Menu({ isMenuOpen }: MenuProps): ReactElement {
	return <$Menu isMenuOpen={isMenuOpen} />
}

export default Menu
