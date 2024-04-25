'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
	links: { label: string; path: string }[];
}

const Header: FC<HeaderProps> = ({ links }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 200);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<header>
			{isMobile ? (
				<div style={styles.mobile}>
					<IconButton onClick={toggleDrawer} style={{ color: 'white' }}>
						<MenuIcon />
					</IconButton>
					<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
						<Box sx={styles.drawer}>
							<Link href={'/'}>
								<Image
									src={'/logo.png'}
									alt={'Logo Image'}
									width={120}
									height={40}
									priority
									style={styles.logo}
								/>
							</Link>
						</Box>
						<Divider />
						<List>
							{links.map((link, index) => (
								<ListItem button key={index} onClick={toggleDrawer}>
									<Link href={link.path} style={styles.mobileLink}>
										{link.label}
									</Link>
								</ListItem>
							))}
						</List>
					</Drawer>
				</div>
			) : (
				<div
					style={{
						...styles.header,
						...(isScrolled
							? {
									position: 'fixed',
									top: 0,
									left: 0,
									right: 0,
									zIndex: 1000,
									boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
								}
							: {}),
					}}
				>
					<ul style={styles.headerLinks}>
						{links.map((link, index) => (
							<li key={index} style={styles.headerLink}>
								<Link href={link.path} style={styles.link}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

const styles = {
	header: {
		backgroundColor: '#E98A33',
		padding: '20px 0px',
	},
	mobile: {
		position: 'fixed' as never,
		top: 3,
		left: 10,
		backgroundColor: '#E98A33',
		borderRadius: '50%',
		zIndex: 1000,
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
	mobileLink: {
		color: '#000',
		textDecoration: 'none',
		fontSize: 15,
		padding: '0px 15px',
		fontWeight: 500,
	},
	logo: {
		margin: '15px 0px',
	},
	drawer: {
		display: 'flex',
		justifyContent: 'center',
	},
};

export default Header;
