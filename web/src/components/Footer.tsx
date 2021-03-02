import Link from 'next/Link'
import React from 'react'

import styled from 'styled-components'

const FooterContainer = styled.div`
    //border: 1px solid black;
    font-family: 'Futura';
    padding: 1em;
    margin: 0.5em;
`

function Footer() {
    return <FooterContainer>Copyright © 2021 Michael Orwin.</FooterContainer>
}

export default Footer
