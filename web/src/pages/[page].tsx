import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/Link'

function About() {
    const router = useRouter()
    const { page } = router.query

    if (router.query.page) {
        return <div>Under Development</div>
    } else {
        return ''
    }
}

export default About
