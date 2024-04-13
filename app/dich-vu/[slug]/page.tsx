import type { Metadata } from 'next';

import DetailService from '../../components/DetailService';
import MainBar from '../../components/MainBar';

interface ServicePost {
	slug: string;
	imageUrl: string;
	title: string;
	description: string;
	metadata: {
		title: string;
		description: string;
		keywords: string[];
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${params.slug}`,
	);
	const servicePost: ServicePost = await response.json();

	return (
		<main>
			<MainBar />
			<DetailService servicePost={servicePost} />
		</main>
	);
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const response = await fetch(
		`http://localhost:5000/api/services/${params.slug}`,
	);
	const servicePost: ServicePost = await response.json();

	return {
		title: servicePost.metadata.title,
		description: servicePost.metadata.description,
		keywords: servicePost.metadata.keywords,
	};
}
