'use client';

import type { FC } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Feature {
	label: string;
}

interface FeaturesProps {
	features: Feature[];
}

const FeaturesBox: FC<FeaturesProps> = ({ features }) => {
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<Grid
			container
			sx={isMobile ? styles.mobileFeatureBoxs : styles.featureBoxs}
		>
			{features.map((feature, index) => (
				<Grid item key={index}>
					<Paper
						elevation={3}
						sx={isMobile ? styles.mobilePaper : styles.paper}
					>
						<p style={isMobile ? styles.mobileTypography : styles.typography}>
							{feature.label}
						</p>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

const styles = {
	featureBoxs: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '45px',
	},
	mobileFeatureBoxs: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	paper: {
		width: '250px',
		height: '125px',
		backgroundColor: '#E98A33',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mobilePaper: {
		width: '160px',
		height: '100px',
		backgroundColor: '#E98A33',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '20px',
	},
	typography: {
		color: '#fff',
		fontSize: '1.5rem',
		fontWeight: '600',
	},
	mobileTypography: {
		color: '#fff',
		fontSize: '1rem',
		fontWeight: '600',
	},
};

export default FeaturesBox;
