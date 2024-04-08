import { createClient } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
	throw new Error('Contentful Space ID or Access Token is missing!');
}

const client = createClient({
	space: spaceId,
	accessToken: accessToken,
});

const getAllServices = async () => {
	const response = await client.getEntries({
		content_type: 'service',
	});

	return response.items;
};

export default getAllServices;
