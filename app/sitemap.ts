import type { MetadataRoute } from 'next';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const serviceResponse = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/services`,
	);
	const servicePosts: ServicePost[] = await serviceResponse.json();

	const servicePostEntries: MetadataRoute.Sitemap = servicePosts.map(
		({ slug }) => ({
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/dich-vu/${slug}`,
		}),
	);

	const newsResponse = await fetch(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news`,
	);
	const newsPosts: NewsPost[] = await newsResponse.json();

	const newsPostEntries: MetadataRoute.Sitemap = newsPosts.map(({ slug }) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/tin-tuc/${slug}`,
	}));

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			lastModified: new Date(),
		},
		...servicePostEntries,
		...newsPostEntries,
	];
}
