import type React from 'react';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });

interface ServiceCardProps {
	title: string;
	slug: string;
	imageUrl: string;
	shortDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	slug,
	imageUrl,
	shortDescription,
}) => {
	return (
		<Card sx={styles.card}>
			<Link href={`/dich-vu/${slug}`} style={styles.link}>
				<CardActionArea>
					<div className="card-image-container">
						<CardMedia
							component="img"
							height="170"
							image={imageUrl}
							alt=""
							className="card-image"
						/>
					</div>
					<CardContent>
						<p
							style={{
								...styles.title,
								fontFamily: montserrat.style.fontFamily,
							}}
						>
							{title}
						</p>
						<p
							style={{
								...styles.previewDescription,
								fontFamily: montserrat.style.fontFamily,
							}}
						>
							{shortDescription}
						</p>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
};

const styles = {
	card: {
		maxWidth: '450px',
	},
	link: { textDecoration: 'none', color: '#000' },
	title: {
		color: '#E98A33',
		fontSize: '1.2rem',
		fontWeight: 600,
	},
	previewDescription: {
		color: '#000000',
		fontSize: '1rem',
		fontWeight: 400,
		marginTop: '15px',
		textAlign: 'justify' as never,
	},
};

export default ServiceCard;
