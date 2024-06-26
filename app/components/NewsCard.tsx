'use client';

import { type FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import BoxDate from './BoxDate';

const montserrat = Montserrat({ subsets: ['latin'] });

interface NewsCardProps {
	title: string;
	slug: string;
	imageUrl: string;
	shortDescription: string;
	createdAt: string;
}

const NewsCard: FC<NewsCardProps> = ({
	title,
	slug,
	imageUrl,
	shortDescription,
	createdAt,
}) => {
	const isMobile = useMediaQuery('(max-width: 600px)');

	const date = new Date(createdAt);

	const day = date.getDate();
	const month = date.getMonth() + 1;

	return (
		<Card>
			<Link href={`/tin-tuc/${slug}`} style={styles.link}>
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
					<Box sx={isMobile ? styles.mobileBoxDate : styles.boxDate}>
						<BoxDate bgColor="#E98A33" number={day} numberColor="#fff" />
						<BoxDate bgColor="#fff" number={month} numberColor="#E98A33" />
					</Box>
					<Box sx={styles.contentContainer}>
						<Box>
							<p
								style={
									isMobile
										? {
												...styles.mobileTitle,
												fontFamily: montserrat.style.fontFamily,
											}
										: {
												...styles.title,
												fontFamily: montserrat.style.fontFamily,
											}
								}
							>
								{title}
							</p>
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
							<p
								style={
									isMobile
										? {
												...styles.mobilePreviewDescription,
												fontFamily: montserrat.style.fontFamily,
											}
										: {
												...styles.previewDescription,
												fontFamily: montserrat.style.fontFamily,
											}
								}
							>
								{shortDescription}
							</p>
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
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
	},
	title: {
		fontSize: '1.2rem',
		fontWeight: 600,
	},
	mobileTitle: {
		fontSize: '0.9rem',
		fontWeight: 600,
		textAlign: 'justify' as never,
	},
	previewDescription: {
		fontSize: '1rem',
		marginTop: '10px',
		textAlign: 'justify' as never,
		fontWeight: 400,
	},
	mobilePreviewDescription: {
		fontSize: '0.8rem',
		marginTop: '10px',
		textAlign: 'justify' as never,
		fontWeight: 400,
	},
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
		left: '36.3%',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
	},
	mobileBoxDate: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		top: '17%',
		left: '39.2%',
		transform: 'translate(-50%, -50%)',
		zIndex: 1,
	},
};

export default NewsCard;
