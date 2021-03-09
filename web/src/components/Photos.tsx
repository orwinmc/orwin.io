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

function Photos() {
    const [photos, setPhotos] = useState<Photos[]>([])

    const handleResize = () => {
        const newPhotos: Photos[] = []

        const containerWidth = window.innerWidth * (window.visualViewport?.scale || 1)
        //const containerWidth = window.innerWidth
        //const preferredAspectRatio = containerWidth / 200 // the denom is the minimum height of a row
        const preferredAspectRatio = Math.sqrt(containerWidth) / 7

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
                            ((containerWidth / aspectRatioSubtotal) *
                                images[i - photosInRow + j].width) /
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
                    ((containerWidth / aspectRatioSubtotal) *
                        images[images.length - photosInRow + j].width) /
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
        <div style={{ maxWidth: '100%', margin: '0 0' }}>
            <BodyContainer>
                <Title>Photos</Title>
                <Subtitle>
                    Below are some of my favorite photos over the last few years. The layout was
                    made with inspiration from Google Photos
                </Subtitle>
                <br />
            </BodyContainer>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    alignItems: 'flex-start',
                }}
            >
                {photos.map((photo) => {
                    return (
                        <img
                            style={{
                                display: 'block',
                                boxSizing: 'border-box',
                                padding: '2px',
                            }}
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
