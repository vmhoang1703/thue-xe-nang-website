import type { Metadata } from 'next';

import DetailPost from '../../components/DetailPost';
import MainBar from '../../components/MainBar';

interface News {
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

export default async function DetailNewsPage({
	params,
}: {
	params: { slug: string };
}) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news/${params.slug}`,
	);
	const news: News = await response.json();

	return (
		<main>
			<MainBar />
			<DetailPost post={news} />
		</main>
	);
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news/${params.slug}`,
	);
	const news: News = await response.json();

	return {
		title: news.metadata.title,
		description: news.metadata.description,
		keywords: news.metadata.keywords,
	};
}
