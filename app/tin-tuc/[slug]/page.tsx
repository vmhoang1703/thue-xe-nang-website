import type { Metadata } from 'next';

import DetailNewsPost from '../../components/DetailNewsPost';
import Footer from '../../components/Footer';
import MainBar from '../../components/MainBar';
import Navbar from '../../components/NavBar';

interface NewsPost {
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

const navLinks = [
	{ label: 'Trang chủ', path: '/' },
	{ label: 'Dịch vụ', path: '/dich-vu' },
	{ label: 'Tin tức', path: '/tin-tuc' },
	// { label: 'Liên hệ', path: '/lien-he' },
];

export default async function DetailNewsPage({
	params,
}: {
	params: { slug: string };
}) {
	const responsePost = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news/${params.slug}`,
	);
	const newsPost: NewsPost = await responsePost.json();

	return (
		<main>
			<Navbar links={navLinks} />
			<MainBar />
			<DetailNewsPost post={newsPost} />
			<Footer />
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
	const NewsPost: NewsPost = await response.json();
	return {
		title: NewsPost.metadata.title,
		description: NewsPost.metadata.description,
		keywords: NewsPost.metadata.keywords,
		icons: {
			icon: '/favicon.ico',
		},
	};
}
