import Link from 'next/link'
import React from 'react'

import styled from 'styled-components'

const FooterContainer = styled.div`
    //border: 1px solid black;
    padding: 1em;
    margin: 0.5em;
    color: #000000;
`

function Footer() {
    return <FooterContainer>Copyright © 2021 Michael Orwin.</FooterContainer>
}

export default Footer
