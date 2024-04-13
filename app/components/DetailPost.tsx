'use client';

import Container from '@mui/material/Container';
// import Image from 'next/image';

interface Post {
	slug: string;
	imageUrl: string;
	title: string;
	description: string;
}

interface DetailPostProps {
	post: Post;
}

const DetailPost = ({ post }: DetailPostProps) => {
	return (
		<Container maxWidth="xl">
			<h1>{post.title}</h1>
			{/* <Image
				src={Post.imageUrl}
				alt={Post.title}
				width={100}
				height={100}
			/> */}
			<p>{post.description}</p>
		</Container>
	);
};

export default DetailPost;
