'use client';

import { type FC } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Container from '@mui/material/Container';
import Link from 'next/link';

interface NavbarProps {
	links: { label: string; path: string }[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
	return (
		<nav style={styles.navbar}>
			<Container maxWidth="xl">
				<ul style={styles.navLinks}>
					{links.map((link, index) => (
						<li key={index} style={styles.navLink}>
							<Link href={link.path} style={styles.link}>
								{link.label}
							</Link>
						</li>
					))}
					<li>
						<FacebookIcon style={styles.fbIcon} />
					</li>
				</ul>
			</Container>
		</nav>
	);
};

const styles = {
	navbar: {
		backgroundColor: '#E98A33',
		padding: '7px 0px',
	},
	navLinks: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'end',
		alignItems: 'center',
	},
	navLink: {
		marginRight: 30,
	},
	link: {
		color: 'white',
		textDecoration: 'none',
		fontSize: 12,
	},
	fbIcon: {
		width: 25,
		height: 25,
		color: 'white',
	},
};

export default Navbar;
