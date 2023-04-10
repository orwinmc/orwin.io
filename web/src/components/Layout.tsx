import React, { ReactElement, ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from './Header'

interface LayoutProps {
	children: ReactNode
}

function Layout({ children }: LayoutProps): ReactElement {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
