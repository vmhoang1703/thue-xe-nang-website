import Container from '@mui/material/Container';
import { draftMode } from 'next/headers';

import { fetchServicePosts } from '../../contenful/servicePost';

import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

// eslint-disable-next-line @next/next/no-async-client-component
const Service = async () => {
	const servicePosts = await fetchServicePosts({
		preview: draftMode().isEnabled,
	});

	return (
		<Container sx={styles.container}>
			<SectionTitle title="DỊCH VỤ CỦA CHÚNG TÔI" />
			<div style={styles.serviceContainer}>
				{servicePosts.map((servicePost) => (
					<ServiceCard
						key={servicePost.slug}
						imageUrl={
							servicePost.imageUrl?.src || 'https://via.placeholder.com/150'
						}
						title={servicePost.title}
						shortDescription={servicePost.shortDescription}
					/>
				))}
			</div>
		</Container>
	);
};

const styles = {
	container: {
		backgroundColor: '#F7F7F7',
		marginBottom: '50px',
		paddingBottom: '40px',
	},
	serviceContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '50px',
		flexWrap: 'wrap' as never,
		maxWidth: '900px',
		margin: '0 auto',
	},
};

export default Service;
