import React, { ReactElement, ReactNode, useState } from 'react'
import styled from 'styled-components'

import { uid } from 'uid'

const MAX_BUBBLE_SIZE = 100

const BackgroundContainer = styled.div`
    background-image: linear-gradient(150deg, #ff4896, #ff4896, #bd35ff, #bd35ff);
    //background-image: linear-gradient(150deg, #4f84e7, #4f84e7, #bd35ff, #bd35ff);
    height: 100vh;
`

interface FountainProps {
    children: ReactNode
}

interface Bubble {
    id: string
    cx: number
    cy: number
    r: number
    v: number
    opacity: number
}

/**
 * Creates a beautiful SVG bubble animation using `requestAnimationFrame` that can be placed behind
 * my name in order to keep visitors of my personal website interested.
 *
 * @param {ReactNode} children  The HTML elements that will be layered over top of the bubble
 *                              animation
 * @return {ReactElement}  A layer containing the bubbles
 */
function Fountain({ children }: FountainProps): ReactElement {
    const [system, setSystem] = useState({
        bubbles: [] as Bubble[],
        lastUpdated: Date.now(),
    })

    /**
     * Generates a random value over a given domain from Math.random(). This simplifies `newBubble`
     * generation math.
     *
     * @param {number} min  The lower bound to the random value
     * @param {number} max  The upper bound to the random value
     * @return {number}     A random value between `min` and `max`
     */
    const randomRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min
    }

    /**
     * Creates a new Bubble object with position below the screen which can subsequently be added to
     * the system for displaying.
     *
     * @return {Bubble}      A new Bubble object with randomized values
     */
    const newBubble = () => {
        const r = Math.random() ** 2 * (MAX_BUBBLE_SIZE - 20) + 20
        const bubble: Bubble = {
            id: uid(16),
            cx: randomRange(0, window.innerWidth),
            cy: window.innerHeight + MAX_BUBBLE_SIZE,
            r: r,
            v: 0,
            opacity: randomRange(0.9, 1),
        }

        return bubble
    }

    /**
     * Lifts all the bubbles in the system ( descreases `cy` ) based off their radius and adds a new
     * bubble depending on the amount of time elapsed since the last `requestAnimationFrame`.
     *
     * @return {void}
     */
    const updateBubbles = () => {
        const now = Date.now()

        const updatedBubbles: Bubble[] = system.bubbles
            .map((bubble) => {
                const r = bubble.r + Math.abs(window.innerHeight - bubble.cy) / 7000
                const cy = bubble.cy - bubble.v * (now - system.lastUpdated)
                const v = bubble.v + (bubble.r ** 2 / 50000000) * (now - system.lastUpdated)
                return {
                    ...bubble,
                    r: r,
                    cy: cy,
                    v: v,
                }
            })
            .filter((bubble) => bubble.cy > -MAX_BUBBLE_SIZE)

        if (Math.random() < (window.innerWidth / 450000) * (now - system.lastUpdated)) {
            updatedBubbles.push(newBubble())
        }

        setSystem({ bubbles: updatedBubbles, lastUpdated: now })
    }

    React.useEffect(() => {
        const animationID = requestAnimationFrame(updateBubbles)
        return () => cancelAnimationFrame(animationID)
    }, [system])

    return (
        <BackgroundContainer>
            <svg width="100%" height="100%">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
                        {system.bubbles.map((bubble) => (
                            <circle
                                key={bubble.id}
                                cx={Math.floor(bubble.cx).toString()}
                                cy={Math.floor(bubble.cy).toString()}
                                r={Math.floor(bubble.r).toString()}
                                fill="#000000"
                                fillOpacity={bubble.opacity.toString()}
                            />
                        ))}
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" mask="url(#mask)" />
                <foreignObject width="100%" height="100%">
                    {children}
                </foreignObject>
            </svg>
        </BackgroundContainer>
    )
}

export default Fountain
