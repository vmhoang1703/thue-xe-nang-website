'use client';
import { type FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

import SectionTitle from './SectionTitle';

interface PartnerProps {
	logos: { src: string; alt: string }[];
}

const Partner: FC<PartnerProps> = ({ logos }) => {
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<SectionTitle title="ĐỐI TÁC CỦA CHÚNG TÔI" />
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={isMobile ? 2 : 10}
					justifyContent="center"
					alignItems="center"
				>
					{logos.map((logo, index) => (
						<Grid item xs={isMobile ? 4 : undefined} key={index}>
							<Image
								src={logo.src}
								alt={logo.alt}
								width={isMobile ? 100 : 150}
								height={isMobile ? 40 : 60}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

const styles = {
	container: {
		backgroundColor: '#F7F7F7',
		paddingBottom: '50px',
	},
};

export default Partner;
