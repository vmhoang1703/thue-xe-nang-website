import { type FC } from 'react';
import Box from '@mui/material/Box';

interface BoxProps {
	bgColor: string;
	number: number;
	numberColor: string;
}

const BoxDate: FC<BoxProps> = ({ bgColor, number, numberColor }) => {
	return (
		<Box sx={{ ...styles.box, backgroundColor: bgColor }}>
			<p style={{ ...styles.number, color: numberColor }}>{number}</p>
		</Box>
	);
};

const styles = {
	box: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '35px',
		width: '35px',
		backgroundColor: '#ff9800',
	},
	number: {
		fontSize: '1rem',
		fontWeight: 800,
	},
};

export default BoxDate;
