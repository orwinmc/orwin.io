import React, { ReactElement, ReactNode } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

interface LayoutProps {
	children: ReactNode
}

function Layout({ children }: LayoutProps): ReactElement {
	return (
		<>
			<Navigation />
			{children}
			<Footer />
		</>
	)
}

export default Layout
