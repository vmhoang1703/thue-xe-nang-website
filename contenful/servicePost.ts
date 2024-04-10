import type { Document as RichTextDocument } from '@contentful/rich-text-types';
import type { Entry } from 'contentful';

import contentfulClient from './contenfulClient';
import type { ContentImage } from './contentImage';
import { parseContentfulContentImage } from './contentImage';
import type { TypeServicePostSkeleton } from './types';

type ServicePostEntry = Entry<TypeServicePostSkeleton, undefined, string>;

export interface ServicePost {
	title: string;
	slug: string;
	shortDescription: string;
	description: RichTextDocument | null;
	imageUrl: ContentImage | null;
}

export function parseContentfulServicePost(
	ServicePostEntry?: ServicePostEntry,
): ServicePost | null {
	if (!ServicePostEntry) {
		return null;
	}

	return {
		title: ServicePostEntry.fields.title || '',
		slug: ServicePostEntry.fields.slug,
		shortDescription: ServicePostEntry.fields.shortDescription || '',
		description: ServicePostEntry.fields.description || null,
		imageUrl: parseContentfulContentImage(ServicePostEntry.fields.imageUrl),
	};
}

export async function fetchServicePosts(): Promise<ServicePost[]> {
	const contentful = contentfulClient();

	const ServicePostsResult =
		await contentful.getEntries<TypeServicePostSkeleton>({
			content_type: 'service',
			include: 2,
			order: ['fields.title'],
		});

	return ServicePostsResult.items.map(
		(ServicePostEntry: ServicePostEntry | undefined) =>
			parseContentfulServicePost(ServicePostEntry) as ServicePost,
	);
}

interface FetchServicePostOptions {
	slug: string;
	preview: boolean;
}
export async function fetchServicePost({
	slug,
}: FetchServicePostOptions): Promise<ServicePost | null> {
	const contentful = contentfulClient();

	const ServicePostsResult =
		await contentful.getEntries<TypeServicePostSkeleton>({
			content_type: 'service',
			'fields.slug': slug,
			include: 2,
		});

	return parseContentfulServicePost(ServicePostsResult.items[0]);
}
