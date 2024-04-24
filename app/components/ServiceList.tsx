'use client';

import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

interface ServicePost {
	title: string;
	slug: string;
	imageUrl: string;
	shortDescription: string;
}

const ServiceList = () => {
	const [servicePosts, setServicePosts] = useState<ServicePost[]>([]);

	useEffect(() => {
		const fetchServicePosts = async () => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services`,
				);
				if (response.status == 200) {
					const data = await response.json();
					setServicePosts(data);
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
			<SectionTitle title="Các dịch vụ tại Long Anh Phát" />
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
		</Container>
	);
};

const styles = {
	container: {
		marginTop: '10px',
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
};

export default ServiceList;
