import { createClient } from 'contentful';

const { NEXT_PUBLIC_CONTENTFUL_SPACE_ID, NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN } =
	process.env;

const client = createClient({
	space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export default function contentfulClient() {
	return client;
}
