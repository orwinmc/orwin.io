import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import BubbleLayer from '../components/Fountain'

const HomeContainer = styled.div`
    background-image: linear-gradient(150deg, #ff4896, #ff4896, #bd35ff, #bd35ff);
`

const Name = styled.h1`
    font-family: 'Exo', sans-serif;
    font-size: 5em;
    font-weight: 700;
    z-index: 1;
    margin: 0;
`

const Job = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-size: 2.25em;
    font-weight: 400;
    margin: 0;
`

function Home() {
    return (
        <BubbleLayer>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}
            >
                <Navigation />
                <div
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Name>Michael Orwin</Name>
                    <Job>Software Developer</Job>
                </div>

                <Footer />
            </div>
        </BubbleLayer>
    )
}

export default Home

/*
<svg width="500" height="500">
                <rect
                    x="0"
                    y="0"
                    width="100"
                    height="50"
                    fill="#fff"
                    fillOpacity="0.5"
                />
            </svg>
*/
