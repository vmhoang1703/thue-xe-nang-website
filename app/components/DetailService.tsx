'use client';

import Container from '@mui/material/Container';
// import Image from 'next/image';

interface ServicePost {
	slug: string;
	imageUrl: string;
	title: string;
	description: string;
}

interface DetailServiceProps {
	servicePost: ServicePost;
}

const DetailService = ({ servicePost }: DetailServiceProps) => {
	return (
		<Container maxWidth="xl">
			<h1>{servicePost.title}</h1>
			{/* <Image
				src={servicePost.imageUrl}
				alt={servicePost.title}
				width={100}
				height={100}
			/> */}
			<p>{servicePost.description}</p>
		</Container>
	);
};

export default DetailService;
