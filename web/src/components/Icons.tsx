import React, { ReactElement } from 'react'

interface IconProps {
	type: string
}

function Icon({ type }: IconProps): ReactElement {
	switch (type) {
		case 'logo': {
			return (
				<svg
					style={{
						width: '1em',
						height: '1em',
						fill: 'currentcolor',
						alignmentBaseline: 'middle',
					}}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="6 9 85 85"
				>
					<defs>
						<g id="logo-triangle">
							<polygon points="16,16 16,0 0,16" />
						</g>
						<g id="logo-square">
							<polygon points="0,0 20,0 20,20 0,20" />
						</g>
					</defs>
					<use href="#logo-triangle" transform="translate(15,59)" />
					<use href="#logo-square" transform="translate(35,55)" transform-origin="10 10" />
					<use href="#logo-square" transform="translate(35,30) rotate(-20)" transform-origin="10 10" />
					<use href="#logo-square" transform="translate(60,45) rotate(10)" transform-origin="10 10" />
				</svg>
			)
		}
		case 'menu':
			return (
				<svg
					style={{
						width: '1em',
						height: '1em',
						fill: 'currentcolor',
						alignmentBaseline: 'middle',
					}}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
				>
					<defs>
						<g id="logo-triangle">
							<path
								id="menu-line"
								d="M22,40 L78,40 z"
								strokeLinejoin="round"
								stroke="currentColor"
								strokeWidth="8"
							/>
						</g>
					</defs>
					<use href="#menu-line" />
					<use href="#menu-line" transform="translate(0, 25)" />
				</svg>
			)
		case 'swimcloud':
			return (
				<svg
					style={{
						height: '1em',
						fill: 'currentcolor',
						alignmentBaseline: 'middle',
					}}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-2 -6 65 42"
				>
					<g fillRule="evenodd">
						<path d="M32.897 23.266c-6.693.01-13.041-1.887-18.881-1.993-1.449-.027-4.235.094-5.7.337l-.755.267c10.127.265 23.79 7.354 34.097 2.358 1.817-.881 4.743-3.182 5.42-4.658-1.533.53-2.366 1.44-6.209 2.602-2.473.748-5.261 1.083-7.972 1.087" />
						<path d="M26.223 6.792c1.482-.224 2.658-.074 3.494.492.529-1.03 1.32-2.362 2.3-2.981 1.838-1.162 4.192-1.434 6.268-.812 2.338.701 4.035 2.42 4.773 4.74.075.237.116.51.172.754.07.303.157.61.295.89.346.71.891.966 1.682.831.226-.038.445-.179.63-.309.274-.192.53-.4.816-.576.883-.546 1.748-.62 2.745-.349 1.457.4 2.243 1.359 2.434 2.835.068.525.055 1.045.032 1.571-.008.193-.047.725.016.898.24.651.656.887 1.328.989 1.49.225 2.943.862 3.932 2.03.953 1.124 1.29 2.521 1.166 3.972-.11 1.303-.88 2.921-1.938 3.723-1.397 1.062-2.654 1.257-4.389 1.26l-10.15.016c-7.87.011-11.779.616-19.582-1.104-3.563-.785-6.991-1.762-10.658-2.396-1.987-.342-4.044-.556-6.105-.492C4 22.822.989 23.18 0 23.89c4.664-.19 7.294.485 11.801 1.747 8.267 2.314 14.261 4.273 22.043 4.312 1.205.006 2.41.003 3.614-.002 2.225-.009 4.453-.04 6.676-.04 1.877 0 3.753.099 5.63.094 2.099-.004 5.154-.093 7.047-1.054a8.304 8.304 0 0 0 2.915-2.489c2.403-3.26 2.36-7.734-.335-10.815-.283-.324-.555-.553-.864-.843a7.401 7.401 0 0 0-2.078-1.384c-.24-.108-.483-.2-.724-.305-.183-.08-.54-.005-.658-.173-.17-.242-.083-.795-.134-1.083-.074-.416-.146-.82-.27-1.227-.387-1.282-1.158-2.262-2.21-3.08-1.025-.797-2.102-1.288-3.41-1.33-.726-.023-2.753.062-3.25.562-.06-1.34-2.611-4.148-3.75-4.917C38.3-.667 33.04-.701 29.527 2.26c-1.273 1.075-2.821 2.837-3.304 4.531" />
					</g>
				</svg>
			)
		default:
			return <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"></svg>
	}
}

export default Icon
