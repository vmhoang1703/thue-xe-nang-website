import type { FC } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Feature {
	label: string;
}

interface FeaturesProps {
	features: Feature[];
}

const FeaturesBox: FC<FeaturesProps> = ({ features }) => {
	return (
		<Grid container sx={styles.featureBoxs}>
			{features.map((feature, index) => (
				<Grid item key={index}>
					<Paper elevation={3} sx={styles.paper}>
						<Typography sx={styles.typography}>{feature.label}</Typography>
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
	paper: {
		width: '250px',
		height: '125px',
		backgroundColor: '#E98A33',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	typography: {
		color: '#fff',
		fontSize: '1.5rem',
		fontWeight: '600',
	},
};

export default FeaturesBox;
