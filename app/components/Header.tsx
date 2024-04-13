'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';

interface HeaderProps {
	links: { label: string; path: string }[];
}

const Header: FC<HeaderProps> = ({ links }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 200);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			style={{
				...styles.header,
				...(isScrolled
					? {
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							zIndex: 1000,
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
						}
					: {}),
			}}
		>
			<Container maxWidth="xl">
				<ul style={styles.headerLinks}>
					{links.map((link, index) => (
						<li key={index} style={styles.headerLink}>
							<Link href={link.path} style={styles.link}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</header>
	);
};

const styles = {
	header: {
		backgroundColor: '#E98A33',
		padding: '20px 0px',
	},
	headerLinks: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerLink: {
		marginRight: 30,
	},
	link: {
		color: 'white',
		textDecoration: 'none',
		fontSize: 17,
	},
};

export default Header;
