import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Photos from '../components/Photos'

function Section() {
    const router = useRouter()
    const { section } = router.query

    if (router.query.section === 'contact') {
        return (
            <Layout>
                <Contact />
            </Layout>
        )
    } else if (router.query.section === 'photos') {
        return (
            <Layout>
                <Photos />
            </Layout>
        )
    } else {
        return (
            <Layout>
                <div />
            </Layout>
        )
    }
}

export default Section
