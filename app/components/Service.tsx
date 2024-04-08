'use client';

import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

import getAllServices from '../../utils/services-contentful';

import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const Service = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const servicesData = await getAllServices();
				setServices(servicesData);
			} catch (error) {
				console.error('Error fetching services:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container sx={styles.container}>
			<SectionTitle title="DỊCH VỤ CỦA CHÚNG TÔI" />
			<div style={styles.serviceContainer}>
				{services.map((service) => (
					<ServiceCard
						key={service.sys.id}
						imageUrl={service.fields.imageUrl.fields.file.url}
						title={service.fields.title}
						description={service.fields.shortDescription}
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
