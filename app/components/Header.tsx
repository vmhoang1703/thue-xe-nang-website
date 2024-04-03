import { type FC } from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';

interface HeaderProps {
	links: { label: string; path: string }[];
}

const Header: FC<HeaderProps> = ({ links }) => {
	return (
		<header style={styles.header}>
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
