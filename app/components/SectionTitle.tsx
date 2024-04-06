'use client';

import { type FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';

interface TitleProps {
	title: string;
}

const SectionTitle: FC<TitleProps> = ({ title }) => {
	return (
		<Box sx={styles.sectionTitle}>
			<h4 style={styles.title}>{title}</h4>
			<ThemeProvider
				theme={{
					palette: {
						primary: {
							main: '#007FFF',
							dark: '#0066CC',
						},
					},
				}}
			>
				<Box sx={styles.titleUnderline} />
			</ThemeProvider>
		</Box>
	);
};

const styles = {
	sectionTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		paddingTop: '40px',
		paddingBottom: '40px',
	},
	title: {
		color: '#000000',
		fontWeight: '800',
		fontSize: '2rem',
	},
	titleUnderline: {
		marginTop: '15px',
		width: 300,
		height: 5,
		borderRadius: 0,
		backgroundColor: '#E98A33',
	},
};

export default SectionTitle;
