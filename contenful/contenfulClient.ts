import { createClient } from 'contentful';

const {
	NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

const client = createClient({
	space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
	space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
	host: 'preview.contentful.com',
});

export default function contentfulClient({ preview = false }) {
	if (preview) {
		return previewClient;
	}

	return client;
}
