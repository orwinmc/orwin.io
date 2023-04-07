import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCloud,
	faCloudBolt,
	faCloudMoon,
	faEnvelope,
	faPersonSwimming,
	faSwimmer,
	faSwimmingPool,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import styled, { CSSProperties } from 'styled-components'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Icon from './Icons'

const $FooterContainer = styled.footer`
	padding: 2em;
	@supports (padding: max(0px)) {
		padding: max(env(safe-area-inset-bottom), 2em) max(env(safe-area-inset-right), 2em)
			max(env(safe-area-inset-bottom), 2em) max(env(safe-area-inset-left), 2em);
	}
	color: currentColor;
	display: flex;
	justify-content: center;
`

const $FooterSectionContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const $IconWrapper = styled.a`
	height: 1em;
	color: currentColor;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	margin-left: 1.5em;
	&:hover {
		transform: scale(1.2);
		transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
	@media (max-width: 650px) {
		&#swimcloud,
		&#github,
		&#instagram,
		&#linkedin {
			display: none;
		}
	}
`

const $SocialLinks = styled.div`
	display: flex;
	align-items: center;
`

interface FooterProps {
	style?: CSSProperties
}

function Footer({ style }: FooterProps) {
	return (
		<$FooterContainer style={style}>
			<$FooterSectionContainer>
				Copyright © 2023
				<div
					style={{
						marginLeft: '2em',
						background: 'rgba(255, 255, 255, 0)',
						height: '1px',
						flex: 1,
					}}
				></div>
				<$SocialLinks>
					<$IconWrapper id="swimcloud" href="https://www.swimcloud.com/swimmer/522777/" target="_blank">
						<Icon type="swimcloud" />
					</$IconWrapper>
					<$IconWrapper id="github" href="https://github.com/orwinmc" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</$IconWrapper>
					<$IconWrapper id="instagram" href="https://instagram.com/orwinmc" target="_blank">
						<FontAwesomeIcon icon={faInstagram} />
					</$IconWrapper>

					<$IconWrapper id="linkedin" href="https://linkedin.com/in/orwinmc" target="_blank">
						<FontAwesomeIcon icon={faLinkedin} />
					</$IconWrapper>
					<$IconWrapper href="mailto:orwinmc@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} />
					</$IconWrapper>
				</$SocialLinks>
			</$FooterSectionContainer>
		</$FooterContainer>
	)
}

export default Footer
