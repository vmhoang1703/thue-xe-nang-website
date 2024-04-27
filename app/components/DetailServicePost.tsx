'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ServiceCard from './ServiceCard';

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
	slug: string;
}

const DetailServicePost = ({ slug }: DetailPostProps) => {
	const [post, setPost] = useState<Post | null>(null);
	const [otherServicePosts, setOtherServicePosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchServicePost = async () => {
			try {
				const responsePost = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${slug}`,
				);
				const postData: Post = await responsePost.json();
				setPost(postData);
			} catch (error) {
				console.error('Error fetching service post:', error);
			}
		};

		const fetchServiceOtherPosts = async () => {
			try {
				const responseOtherPosts = await fetch(
					`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services`,
				);
				if (responseOtherPosts.status === 200) {
					const data: Post[] = await responseOtherPosts.json();
					const otherServicePost = data.filter(
						(otherPost) => otherPost.slug !== slug,
					);
					setOtherServicePosts(otherServicePost);
				} else {
					throw new Error('Failed to fetch service posts');
				}
			} catch (error) {
				console.error('Error fetching service posts:', error);
			}
		};

		fetchServicePost();
		fetchServiceOtherPosts();
	}, [slug]);

	if (!post) {
		return <div>Loading...</div>;
	}

	const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const formattedDescription = post.description.replace(/\\n/g, '<br>');

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
							<p
								style={styles.description}
								dangerouslySetInnerHTML={{ __html: formattedDescription }}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<h2>Các dịch vụ khác</h2>
					<Grid container spacing={2} mt={1}>
						{otherServicePosts.map((otherPost) => (
							<Grid item xs={12} sm={6} md={4} key={otherPost.slug}>
								<ServiceCard
									title={otherPost.title}
									slug={otherPost.slug}
									imageUrl={otherPost.imageUrl}
									shortDescription={otherPost.shortDescription}
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
		whiteSpace: 'pre-wrap',
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
};

export default DetailServicePost;
