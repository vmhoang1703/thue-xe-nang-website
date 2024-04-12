import Container from '@mui/material/Container';

import { fetchServicePosts } from '../../contenful/servicePost';

import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

// eslint-disable-next-line @next/next/no-async-client-component
const Service = async () => {
	const servicePosts = await fetchServicePosts();
	const selectedServicePosts = servicePosts.slice(0, 4);

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<SectionTitle title="DỊCH VỤ CỦA CHÚNG TÔI" />
			<div style={styles.serviceContainer}>
				{selectedServicePosts.map((servicePost) => (
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
		paddingBottom: '50px',
	},
	serviceContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '50px',
		flexWrap: 'wrap' as never,
		maxWidth: '1000px',
		margin: '0 auto',
	},
};

export default Service;
