import Link from 'next/link'
import React from 'react'

import styled from 'styled-components'

const NavLink = styled.a`
    padding: 1em;
    margin: 0.5em;
    cursor: pointer;
    display: inline-block;
    &:hover {
        opacity: 0.4;
    }
    transition: opacity 0.3s ease;
    //color: #222222;
`

const NavigationContainer = styled.nav`
    //border: 1px solid black;
    white-space: nowrap;
    overflow-x: scroll;
`

function Navigation() {
    return (
        <NavigationContainer>
            <Link href="/">
                <NavLink>Michael Orwin</NavLink>
            </Link>
            <Link href="/about">
                <NavLink>About</NavLink>
            </Link>
            <Link href="/portfolio">
                <NavLink>Portfolio</NavLink>
            </Link>
            <Link href="/research">
                <NavLink>Research</NavLink>
            </Link>
            <Link href="/photography">
                <NavLink>Photography</NavLink>
            </Link>
            <Link href="/contact">
                <NavLink>Contact Me</NavLink>
            </Link>
        </NavigationContainer>
    )
}

export default Navigation
