'use client';

import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';

import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

interface ServicePost {
	title: string;
	slug: string;
	imageUrl: string;
	shortDescription: string;
}

const Service = () => {
	const [servicePosts, setServicePosts] = useState<ServicePost[]>([]);

	useEffect(() => {
		const fetchServicePosts = async () => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services`,
				);
				if (response.status == 200) {
					const data = await response.json();
					setServicePosts(data.slice(0, 4));
				} else {
					throw new Error('Failed to fetch service posts');
				}
			} catch (error) {
				console.error('Error fetching service posts:', error);
			}
		};

		fetchServicePosts();
	}, []);

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<SectionTitle title="DỊCH VỤ CỦA CHÚNG TÔI" />
			<div style={styles.serviceContainer}>
				{servicePosts.map((servicePost) => (
					<ServiceCard
						key={servicePost.slug}
						title={servicePost.title}
						slug={servicePost.slug}
						imageUrl={servicePost.imageUrl || 'https://via.placeholder.com/150'}
						shortDescription={servicePost.shortDescription}
					/>
				))}
			</div>
			<Link href={'/dich-vu'} style={styles.xemThemLink}>
				<Button variant="contained" color="success" sx={styles.xemThemBtn}>
					Xem thêm
				</Button>
			</Link>
		</Container>
	);
};

const styles = {
	container: {
		backgroundColor: '#F7F7F7',
		paddingBottom: '50px',
	},
	serviceContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '50px',
		flexWrap: 'wrap' as never,
		maxWidth: '1000px',
		margin: '0 auto',
	},
	xemThemLink: {
		display: 'flex',
		justifyContent: 'center',
		textDecoration: 'none',
	},
	xemThemBtn: {
		marginTop: 5,
	},
};

export default Service;
