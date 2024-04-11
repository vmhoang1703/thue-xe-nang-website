import type { Document as RichTextDocument } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';

import contentfulClient from './contenfulClient';
import type { ContentImage } from './contentImage';
import { parseContentfulContentImage } from './contentImage';
import type { TypeNewsSkeleton } from './types';

type NewsEntry = Entry<TypeNewsSkeleton, undefined, string>;

export interface News {
	title: string;
	slug: string;
	shortDescription: string;
	description: RichTextDocument | null;
	imageUrl: ContentImage | null;
	createdAt: string;
}

export function parseContentfulNews(NewsEntry?: NewsEntry): News | null {
	if (!NewsEntry) {
		return null;
	}

	return {
		title: NewsEntry.fields.title || '',
		slug: NewsEntry.fields.slug,
		shortDescription: NewsEntry.fields.shortDescription || '',
		description: NewsEntry.fields.description || null,
		imageUrl: parseContentfulContentImage(NewsEntry.fields.imageUrl),
		createdAt: NewsEntry.fields.createdAt || '',
	};
}

export async function fetchAllNews(): Promise<News[]> {
	const contentful = contentfulClient();

	const NewssResult = await contentful.getEntries<TypeNewsSkeleton>({
		content_type: 'news',
		include: 2,
		order: ['fields.createdAt'],
	});

	return NewssResult.items.map(
		(NewsEntry: NewsEntry | undefined) =>
			parseContentfulNews(NewsEntry) as News,
	);
}

interface FetchNewsOptions {
	slug: string;
	preview: boolean;
}
export async function fetchNews({
	slug,
}: FetchNewsOptions): Promise<News | null> {
	const contentful = contentfulClient();

	const NewssResult = await contentful.getEntries<TypeNewsSkeleton>({
		content_type: 'news',
		'fields.slug': slug,
		include: 2,
	});

	return parseContentfulNews(NewssResult.items[0]);
}
