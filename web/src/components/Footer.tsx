import React from 'react'
import styled, { CSSProperties, css } from 'styled-components'

/* Icon Imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Icon, { Icons } from './Icons'

/* Outermost Container for Footer */
const $Footer = styled('footer')<{ isMenuOpen: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;

	max-width: 1250px;
	width: 100%;
	padding: 2em;

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

const $SocialLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 1em;
	min-width: 1em;
	font-size: 1.5em;
	margin-left: 1.5em;

	color: currentColor;

	/* Expand on Hover Effect */
	transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1); // Contracting
	&:hover {
		transform: scale(1.2);
		transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1); // Expanding
	}

	/* Reduce Number of Socials Shown for Smaller Screens */
	@media (max-width: 650px) {
		&#swimCloudLink,
		&#githubLink,
		&#instagramLink,
		&#linkedinLink {
			display: none;
		}
	}

	/* High Contrast Theme Adjustments */
	@media (prefers-contrast: more) {
		padding: 0.25em 0.5em;
		margin-left: 0.9em;
		border: 1px solid white;
		border-radius: 15px;
		background-color: rgb(0, 60, 60, 0.6);
	}
`

/* Wrapper around Socials to make use of `space-between` */
const $Socials = styled.div`
	display: flex;
`

interface FooterProps {
	style?: CSSProperties
	isMenuOpen: boolean
}

function Footer({ style, isMenuOpen }: FooterProps) {
	return (
		<$Footer style={style} isMenuOpen={isMenuOpen}>
			Copyright © 2023
			<$Socials>
				<$SocialLink id="swimCloudLink" href="https://www.swimcloud.com/swimmer/522777/" target="_blank">
					<Icon icon={Icons.SWIM_CLOUD} />
				</$SocialLink>
				<$SocialLink id="buyMeACoffeeLink" href="https://www.buymeacoffee.com/orwinmc" target="_blank">
					<Icon icon={Icons.BUY_ME_A_COFFEE} />
				</$SocialLink>
				<$SocialLink id="githubLink" href="https://github.com/orwinmc" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</$SocialLink>
				<$SocialLink id="instagramLink" href="https://instagram.com/orwinmc" target="_blank">
					<FontAwesomeIcon icon={faInstagram} />
				</$SocialLink>
				<$SocialLink id="linkedinLink" href="https://linkedin.com/in/orwinmc" target="_blank">
					<FontAwesomeIcon icon={faLinkedin} />
				</$SocialLink>
				<$SocialLink href="mailto:orwinmc@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} />
				</$SocialLink>
			</$Socials>
		</$Footer>
	)
}

export default Footer
