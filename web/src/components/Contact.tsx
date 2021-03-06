import React from 'react'
import styled from 'styled-components'
import BodyContainer from './BodyContainer'

const InputText = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 0.75em;
    padding: 0.75em;
    font-size: 1em;
    font-family: 'Nunito', san-serif;
    &:focus {
        border: 2px solid #bd35ff;
        padding: calc(0.75em - 1px);
    }
    outline: none;
    -webkit-appearance: none;
`

const TextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 0.75em;
    padding: 0.75em;
    font-size: 1em;
    font-family: 'Nunito', san-serif;
    outline: none;
    &:focus {
        border: 2px solid #bd35ff;
        padding: calc(0.75em - 1px);
    }
    -webkit-appearance: none;
`

const Label = styled.span`
    color: #999999;
`

function Contact() {
    return (
        <BodyContainer>
            <div></div>
            <h1 style={{ fontFamily: '"Exo", san-serif', fontSize: '2.5em' }}>Contact Me</h1>
            <h2
                style={{
                    fontWeight: 'normal',
                    fontSize: '1.1em',
                }}
            >
                Feel free to message me with any questions or if you would like to say hello
            </h2>
            <br />
            Name:
            <br />
            <InputText type="text"></InputText>
            <br />
            <br />
            <br />
            Email Address:
            <br />
            <InputText type="text"></InputText>
            <br />
            <br />
            <br />
            Message:
            <br />
            <TextArea></TextArea>
            <button type="submit">Send</button>
        </BodyContainer>
    )
}

export default Contact
