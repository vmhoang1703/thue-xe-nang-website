import type React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';

interface ServiceCardProps {
	imageUrl: string;
	title: string;
	shortDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	imageUrl,
	title,
	shortDescription,
}) => {
	return (
		<Card sx={{ maxWidth: 400 }}>
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
					<p style={styles.title}>{title}</p>
					<p style={styles.previewDescription}>{shortDescription}</p>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link href={'/dich-vu'}>
					<Button size="small" color="primary">
						Xem chi tiết
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

const styles = {
	title: {
		color: '#E98A33',
		fontSize: '1.4rem',
		fontWeight: 600,
	},
	previewDescription: {
		color: '#000000',
		fontSize: '1rem',
		fontWeight: 300,
		marginTop: '10px',
	},
};

export default ServiceCard;
