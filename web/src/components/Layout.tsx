import React, { ReactElement, ReactNode, useState } from 'react'
import Footer from '../components/Footer'
import Header from './Header'
import Menu from './Menu'

interface LayoutProps {
	children?: ReactNode
}

function Layout({ children }: LayoutProps): ReactElement {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<>
			<Header isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
			{children}
			<Footer isMenuOpen={isMenuOpen} />
			<Menu isMenuOpen={isMenuOpen} />
		</>
	)
}

/* */

export default Layout
