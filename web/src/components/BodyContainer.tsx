import Link from 'next/link'
import React, { ReactElement, ReactNode } from 'react'

import styled from 'styled-components'

const Container = styled.div`
    //border: 1px solid black;
    @media (max-width: 599px) {
        margin: 0 1.5em;
    }
    @media (min-width: 600px) {
        margin: 0 10%;
    }
`

interface BodyContainerProps {
    children: ReactNode
}

function BodyContainer({ children }: BodyContainerProps): ReactElement {
    return <Container>{children}</Container>
}

export default BodyContainer
