import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Photos from '../components/Photos'

function Section() {
	const router = useRouter()
	const { section } = router.query

	switch (section) {
		case 'contact': {
			return (
				<Layout>
					<Contact />
				</Layout>
			)
		}
		case 'photos': {
			return (
				<Layout>
					<Photos />
				</Layout>
			)
		}
		default: {
			return (
				<Layout>
					<div />
				</Layout>
			)
		}
	}
}

export default Section
