import { setUncaughtExceptionCaptureCallback } from 'process'
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { uid } from 'uid'

const BackgroundContainer = styled.div`
    background-image: linear-gradient(
        150deg,
        #ff4896,
        #ff4896,
        #bd35ff,
        #bd35ff
    );
    height: 100vh;
`

const rise = keyframes`
  from {
    transform: translateY(0);
    
  }

  to {
    transform: translateY(-1000px);
  }
`

const BubbleStyles = styled.circle`
    animation-name: ${rise};
    animation-duration: 10s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    //-webkit-backface-visibility: hidden;
    //-webkit-perspective: 1000;
`

interface BubbleLayerProps {
    children: ReactNode
}

interface Bubble {
    id: string
    cx: number
    cy: number
    r: number
}

function BubbleLayer({ children }: BubbleLayerProps) {
    const [bubbles, setBubbles] = useState<Bubble[]>([])

    const addBubble = (max: number) => {
        const cx = Math.random() * window.innerWidth
        const cy = window.innerHeight + 100
        const r = Math.random() ** 2 * 80 + 10

        const bubble: Bubble = { id: uid(16), cx: cx, cy: cy, r: r }

        if (bubbles.length > max) {
            setBubbles([...bubbles.slice(bubbles.length - max), bubble])
        } else {
            setBubbles([...bubbles, bubble])
        }
    }

    console.log(bubbles.length)

    useEffect(() => {
        const interval = setInterval(() => {
            addBubble(200)
        }, 200)

        return () => {
            clearInterval(interval)
        }
    })

    return (
        <BackgroundContainer>
            <svg width="100%" height="100%">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="#fff"
                        />
                        {bubbles.map((bubble, index) => (
                            <BubbleStyles
                                key={bubble.id}
                                cx={Math.floor(bubble.cx).toString()}
                                cy={Math.floor(bubble.cy).toString()}
                                r={Math.floor(bubble.r).toString()}
                                fill="black"
                            />
                        ))}
                    </mask>
                </defs>
                <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="rgb(255, 255, 255)"
                    mask="url(#mask)"
                />
                <foreignObject width="100%" height="100%">
                    {children}
                </foreignObject>
            </svg>
        </BackgroundContainer>
    )
}

export default BubbleLayer
