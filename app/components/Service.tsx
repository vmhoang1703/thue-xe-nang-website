import Container from '@mui/material/Container';

import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const Service = () => {
	return (
		<Container sx={styles.container}>
			<SectionTitle title="DỊCH VỤ CỦA CHÚNG TÔI" />
			<div style={styles.serviceContainer}>
				<ServiceCard
					imageUrl={'/serviceImage.png'}
					title={'Sửa chữa xe nâng tại Bà Rịa'}
					description={
						'Chuyên sửa chữa xe nâng hàng, nâng điện, nâng dầu tại Bà Rịa...'
					}
				/>
				<ServiceCard
					imageUrl={'/serviceImage.png'}
					title={'Sửa chữa xe nâng tại Bà Rịa'}
					description={
						'Chuyên sửa chữa xe nâng hàng, nâng điện, nâng dầu tại Bà Rịa...'
					}
				/>
				<ServiceCard
					imageUrl={'/serviceImage.png'}
					title={'Sửa chữa xe nâng tại Bà Rịa'}
					description={
						'Chuyên sửa chữa xe nâng hàng, nâng điện, nâng dầu tại Bà Rịa...'
					}
				/>
				<ServiceCard
					imageUrl={'/serviceImage.png'}
					title={'Sửa chữa xe nâng tại Bà Rịa'}
					description={
						'Chuyên sửa chữa xe nâng hàng, nâng điện, nâng dầu tại Bà Rịa...'
					}
				/>
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
		flexWrap: 'wrap' as const,
		maxWidth: '900px',
		margin: '0 auto',
	},
};

export default Service;
