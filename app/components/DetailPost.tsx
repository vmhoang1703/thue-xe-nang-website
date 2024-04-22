/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ServiceCard from './ServiceCard';

interface Post {
	slug: string;
	imageUrl: string;
	title: string;
	description: string;
	shortDescription: string;
	createdAt: string;
}

interface DetailPostProps {
	post: Post;
	otherPosts: Post[];
	title: string;
}

const DetailPost = ({ post, otherPosts, title }: DetailPostProps) => {
	const formattedDate = new Date(post.createdAt).toLocaleDateString('vi-VN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<Grid container spacing={3}>
				<Grid item xs={9} style={styles.detailGrid}>
					<img src={post.imageUrl} alt={post.title} style={styles.image} />
					<h1 style={styles.title}>{post.title}</h1>
					<p style={styles.description}>{post.description}</p>
					<p style={styles.date}>Ngày xuất bản: {formattedDate}</p>
				</Grid>
				<Grid item xs={3}>
					<h2>Các {title} khác</h2>
					<div style={styles.otherPostsContainer}>
						{otherPosts.map((otherPost) => (
							<ServiceCard
								key={otherPost.slug}
								title={otherPost.title}
								slug={otherPost.slug}
								imageUrl={otherPost.imageUrl}
								shortDescription={otherPost.shortDescription}
							/>
						))}
					</div>
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
		paddingRight: '20px',
	},
	title: {
		marginBottom: 10,
		color: '#E98A33',
	},
	date: {
		fontSize: '1.2rem',
		fontWeight: 500,
		marginTop: 20,
		float: 'right' as const,
	},
	description: {
		fontSize: '1.2rem',
		fontWeight: 450,
		marginTop: 25,
		textAlign: 'justify' as never,
	},
	image: {
		width: '100%',
		marginBottom: '20px',
	},
	otherPostsContainer: {
		maxHeight: '150vh',
		overflowY: 'auto' as const,
		marginTop: 20,
	},
};

export default DetailPost;
