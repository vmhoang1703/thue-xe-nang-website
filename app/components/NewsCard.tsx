'use client';

import { type FC } from 'react';
// import Image from 'next/image';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';

import BoxDate from './BoxDate';

interface NewsCardProps {
	imageUrl: string;
	title: string;
	shortDescription: string;
	createdAt: string;
}

const NewsCard: FC<NewsCardProps> = ({
	imageUrl,
	title,
	shortDescription,
	createdAt,
}) => {
	const date = new Date(createdAt);

	const day = date.getDate();
	const month = date.getMonth() + 1;

	return (
		<Card sx={{ maxWidth: 550 }}>
			<Link href={'/dich-vu'} style={styles.link}>
				<CardActionArea sx={styles.card}>
					<div className="card-image-container" style={{ maxWidth: '200px' }}>
						<CardMedia
							component="img"
							height={200}
							width={200}
							image={imageUrl}
							alt=""
							className="card-image"
						/>
					</div>
					<Box sx={styles.boxDate}>
						<BoxDate bgColor="#E98A33" number={day} numberColor="#fff" />
						<BoxDate bgColor="#fff" number={month} numberColor="#E98A33" />
					</Box>
					<Box sx={styles.contentContainer}>
						<Box>
							<p style={styles.title}>{title}</p>
							<ThemeProvider
								theme={{
									palette: {
										primary: {
											main: '#007FFF',
											dark: '#0066CC',
										},
									},
								}}
							>
								<Box sx={styles.titleUnderline} />
							</ThemeProvider>
							<p style={styles.shortDescription}>{shortDescription}</p>
						</Box>
					</Box>
				</CardActionArea>
			</Link>
		</Card>
	);
};

const styles = {
	link: { textDecoration: 'none', color: '#000' },
	card: { display: 'flex', maxWidth: '550px', position: 'relative' },
	contentContainer: {
		padding: '20px 20px 20px 45px',
		width: '350px',
		height: '200px',
		textAlign: 'justify',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
	},
	title: { fontSize: '20px', fontWeight: '550' },
	shortDescription: { fontSize: '14px', marginTop: '10px' },
	titleUnderline: {
		marginTop: '20px',
		width: 40,
		height: 3,
		borderRadius: 0,
		backgroundColor: '#9F9F9F',
	},
	boxDate: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		top: '17%',
		left: '36.5%',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
	},
};

export default NewsCard;
