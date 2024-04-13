'use client';

import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import NewsCard from './NewsCard';
import SectionTitle from './SectionTitle';

interface News {
	title: string;
	slug: string;
	imageUrl: string;
	shortDescription: string;
	createdAt: string;
}

const News = () => {
	const [news, setNews] = useState<News[]>([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news`,
				);
				if (response.status == 200) {
					const data = await response.json();
					setNews(data);
				} else {
					throw new Error('Failed to fetch service posts');
				}
			} catch (error) {
				console.error('Error fetching service posts:', error);
			}
		};

		fetchNews();
	}, []);

	return (
		<Container sx={styles.container}>
			<SectionTitle title="TIN TỨC NỔI BẬT" />
			<div style={styles.newsContainer}>
				{news.map((news) => (
					<NewsCard
						key={news.slug}
						title={news.title}
						slug={news.slug}
						imageUrl={news.imageUrl || 'https://via.placeholder.com/150'}
						shortDescription={news.shortDescription}
						createdAt={news.createdAt}
					/>
				))}
			</div>
		</Container>
	);
};

const styles = {
	container: {
		backgroundColor: '#fff',
		paddingBottom: '50px',
	},
	newsContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '50px',
		flexWrap: 'wrap' as never,
		maxWidth: '1200px',
		margin: '0 auto',
	},
};

export default News;
