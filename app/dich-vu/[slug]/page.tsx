import type { Metadata } from 'next';

import DetailPost from '../../components/DetailPost';
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

export default async function DetailServicePostPage({
	params,
}: {
	params: { slug: string };
}) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${params.slug}`,
	);
	const servicePost: ServicePost = await response.json();

	return (
		<main>
			<MainBar />
			<DetailPost post={servicePost} />
		</main>
	);
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${params.slug}`,
	);
	const servicePost: ServicePost = await response.json();

	return {
		title: servicePost.metadata.title,
		description: servicePost.metadata.description,
		keywords: servicePost.metadata.keywords,
	};
}
