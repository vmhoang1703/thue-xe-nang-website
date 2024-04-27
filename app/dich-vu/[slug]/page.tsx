import type { Metadata } from 'next';

import DetailServicePost from '../../components/DetailServicePost';
import Footer from '../../components/Footer';
import MainBar from '../../components/MainBar';
import Navbar from '../../components/NavBar';

interface ServicePost {
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

export default function DetailServicePostPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<main>
			<Navbar links={navLinks} />
			<MainBar />
			<DetailServicePost slug={params.slug} />
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
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services/${params.slug}`,
	);
	const servicePost: ServicePost = await response.json();
	return {
		title: servicePost.metadata.title,
		description: servicePost.metadata.description,
		keywords: servicePost.metadata.keywords,
		icons: {
			icon: '/favicon.ico',
		},
	};
}
