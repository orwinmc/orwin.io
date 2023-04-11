import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import images from '../images'
import BodyContainer from './BodyContainer'

interface Photos {
	id: string
	src: string
	alt: string
	width: number
	height: number
}

const Title = styled.h1`
	font-size: 2.5em;
	font-family: 'Exo', san-serif;
`

const Subtitle = styled.h2`
	font-size: 1.1em;
	font-weight: normal;
`

const Image = styled.img`
	display: block;

	transition: transform 200ms, outline 200ms;
	z-index: 0;
	//padding: 2px;
	&:hover {
		cursor: pointer;
		//padding: clamp(2px, 0.6%, 6px);
		background: rgb(255, 255, 255);
		box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.8);
		transform: scale(1.05);
		z-index: 1;
		//position: relative;
		//border: 10px solid rgba(255, 255, 255, 1);
		outline: 4px solid white;
	}

	@media (max-width: 650px) {
		padding: 1px;
		&:hover {
			outline: 1px solid white;
		}
	}

	//object-fit: none;
`

function Photos() {
	const [photos, setPhotos] = useState<Photos[]>([])

	const handleResize = () => {
		const newPhotos: Photos[] = []

		const containerWidth = window.innerWidth * (window.visualViewport?.scale || 1) - 35
		//console.log(containerWidth)
		//const containerWidth = window.innerWidth
		//const preferredAspectRatio = containerWidth / 200 // the denom is the minimum height of a row
		const preferredAspectRatio = containerWidth / 300

		let photosInRow = 0
		let aspectRatioSubtotal = 0
		for (let i = 0; i < images.length; i++) {
			const image = images[i]

			if (aspectRatioSubtotal + image.width / image.height < preferredAspectRatio) {
				photosInRow++
				aspectRatioSubtotal += image.width / image.height
			} else {
				for (let j = 0; j < photosInRow; j++) {
					newPhotos.push({
						id: images[i - photosInRow + j].id,
						src: images[i - photosInRow + j].src,
						alt: images[i - photosInRow + j].alt,
						width:
							((containerWidth / aspectRatioSubtotal) * images[i - photosInRow + j].width) /
							images[i - photosInRow + j].height,
						height: containerWidth / aspectRatioSubtotal,
					})
				}
				photosInRow = 1
				aspectRatioSubtotal = image.width / image.height
			}
		}

		for (let j = 0; j < photosInRow; j++) {
			newPhotos.push({
				id: images[images.length - photosInRow + j].id,
				src: images[images.length - photosInRow + j].src,
				alt: images[images.length - photosInRow + j].alt,
				width:
					((containerWidth / aspectRatioSubtotal) * images[images.length - photosInRow + j].width) /
					images[images.length - photosInRow + j].height,
				height: containerWidth / aspectRatioSubtotal,
			})
		}

		setPhotos(newPhotos)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		window.addEventListener('orientationchange', () => handleResize)
		window.addEventListener('fullscreenchange', () => handleResize)
	}, [])

	return (
		<div style={{ margin: '0 0', overflowX: 'hidden', position: 'relative' }}>
			<BodyContainer>
				<Title>Photography</Title>
				<Subtitle>
					Below are some of my favorite photos over the last few years. The layout was made with inspiration
					from Google Photos
				</Subtitle>
				<br />
			</BodyContainer>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					width: '100%',
					alignItems: 'flex-start',
					//margin: '0 auto',
				}}
			>
				{photos.map((photo) => {
					return (
						<Image
							key={photo.id}
							src={photo.src}
							alt={photo.alt}
							width={photo.width}
							height={photo.height}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Photos

/*]

<h2
                    style={{
                        fontWeight: 'normal',
                        fontSize: '1em',
                    }}
                >
                    Below are some of my favorite photos over the last few years. The layout was
                    made with inspiration from Google Photos
                </h2>

                */
