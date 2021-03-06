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
    color: #000000;
    //border: solid 1px black;
`

const NavigationContainer = styled.nav`
    //border: 1px solid black;
    white-space: nowrap;
    overflow-x: scroll;
    &:first-child {
        margin-left: 0;
    }
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
            <Link href="/mathematics">
                <NavLink>Mathematics</NavLink>
            </Link>
            <Link href="/photos">
                <NavLink>Photos</NavLink>
            </Link>
            <Link href="/blog">
                <NavLink>Blog</NavLink>
            </Link>
            <Link href="/contact">
                <NavLink>Contact Me</NavLink>
            </Link>
        </NavigationContainer>
    )
}

export default Navigation
