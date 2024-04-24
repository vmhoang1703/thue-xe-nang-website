'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NewsCard from './NewsCard';

interface Post {
	slug: string;
	imageUrl: string;
	title: string;
	description: string;
	shortDescription: string;
	metadata: {
		title: string;
		description: string;
		keywords: string[];
	};
	createdAt: string;
}

interface DetailPostProps {
	post: Post;
}

const DetailNewsPost = ({ post }: DetailPostProps) => {
	const [otherNewsPosts, setOtherNewsPosts] = useState<Post[]>([]);

	const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	useEffect(() => {
		const fetchNewsOtherPosts = async () => {
			try {
				const responseOtherPosts = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news`,
				);
				if (responseOtherPosts.status == 200) {
					const data: Post[] = await (await responseOtherPosts).json();
					const otherNewsPost = data.filter(
						(otherPost) => otherPost.slug !== post.slug,
					);
					setOtherNewsPosts(otherNewsPost);
				} else {
					throw new Error('Failed to fetch News posts');
				}
			} catch (error) {
				console.error('Error fetching News posts:', error);
			}
		};

		fetchNewsOtherPosts();
	}, []);

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} style={styles.detailGrid}>
					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<h1 style={styles.title}>{post.title}</h1>
							<p style={styles.date}>Ngày xuất bản: {formattedDate}</p>
							<img src={post.imageUrl} alt={post.title} style={styles.image} />
						</Grid>
						<Grid item xs={12} md={6}>
							<p style={styles.description}>{post.description}</p>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<h2>Các dịch vụ khác</h2>
					<Grid container spacing={5} mt={1} sx={styles.otherNews}>
						{otherNewsPosts.map((otherPost) => (
							<Grid item xs={12} sm={6} md={5} key={otherPost.slug}>
								<NewsCard
									title={otherPost.title}
									slug={otherPost.slug}
									imageUrl={otherPost.imageUrl}
									shortDescription={otherPost.shortDescription}
									createdAt={otherPost.createdAt}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

const styles = {
	container: {
		marginTop: 5,
		marginBottom: 5,
	},
	detailGrid: {
		marginBottom: 50,
	},
	title: {
		marginBottom: 10,
		color: '#E98A33',
	},
	date: {
		fontSize: '1.2rem',
		fontWeight: 500,
		marginBottom: 20,
	},
	description: {
		fontSize: '1.2rem',
		fontWeight: 450,
		textAlign: 'justify' as const,
	},
	image: {
		width: '100%',
		marginBottom: '20px',
	},
	otherPostsContainer: {
		display: 'flex',
		maxHeight: '150vh',
		// overflowY: 'auto' as const,
		marginTop: 20,
	},
	otherNews: {
		display: 'flex',
		justifyContent: 'center',
	},
};

export default DetailNewsPost;
