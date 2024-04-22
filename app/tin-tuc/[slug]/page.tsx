import type { Metadata } from 'next';

import DetailPost from '../../components/DetailPost';
import Footer from '../../components/Footer';
import MainBar from '../../components/MainBar';
import Navbar from '../../components/NavBar';

interface News {
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
	const newsPost: News = await responsePost.json();

	const responseOtherPosts = fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news`,
	);
	const data: News[] = await (await responseOtherPosts).json();
	const otherNewsPost = data.filter((post) => post.slug !== params.slug);

	return (
		<main>
			<Navbar links={navLinks} />
			<MainBar />
			<DetailPost post={newsPost} otherPosts={otherNewsPost} title="tin tức" />
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
	const news: News = await response.json();

	return {
		title: news.metadata.title,
		description: news.metadata.description,
		keywords: news.metadata.keywords,
	};
}
