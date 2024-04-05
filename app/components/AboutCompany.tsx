import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import FeaturesBox from './FeatureBox';

const AboutCompany = () => {
	const features = [
		{ label: 'Chất lượng tốt' },
		{ label: 'Uy tín' },
		{ label: 'Chuyên nghiệp' },
		{ label: 'Ưu đãi' },
	];

	return (
		<Container sx={styles.container}>
			<Box sx={styles.bigBox}>
				<Box sx={styles.leftBox}>
					<Box sx={styles.companyNameBox1}>
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
							<Box
								sx={{
									width: 10,
									height: 100,
									borderRadius: 30,
									bgcolor: '#E98A33',
								}}
							/>
						</ThemeProvider>
						<Box sx={styles.companyNameBox2}>
							<p style={styles.about}>VỀ CHÚNG TÔI</p>
							<p style={styles.name}>LONG ANH PHÁT</p>
						</Box>
					</Box>
					<Typography variant="body1" gutterBottom sx={styles.description}>
						Thành lập từ năm 2003, Long Anh Phát là một trong những công ty CHO
						THUÊ XE NÂNG ĐẨU TIÊN TẠI BÀ RỊA và đã có những bước đi vững chắc để
						trở thành thương hiệu uy tín và được rất nhiều sự tin nhiệm trên thị
						trường. Năm 2008, Công ty TNHH Long Anh Phát được xếp hạng năm trong
						top 500 doanh nghiệp lớn nhất Việt Nam do báo Vietnamnet bình chọn,
						xếp hạng tín dụng AAA (2012) và A (2014).
					</Typography>
				</Box>
				<Box sx={styles.rightBox}>
					<Image
						src={'/introImage.png'}
						alt={'forklift image'}
						width={350}
						height={250}
					/>
				</Box>
			</Box>
			<FeaturesBox features={features} />
		</Container>
	);
};

const styles = {
	container: {
		marginTop: '85px',
	},
	bigBox: {
		display: 'flex',
	},
	leftBox: {
		width: '50%',
	},
	rightBox: {
		width: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	companyNameBox1: {
		display: 'flex',
	},
	companyNameBox2: {
		paddingLeft: '15px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	about: {
		fontSize: '1.5rem',
		fontWeight: '600',
		padding: 0,
		margin: 0,
	},
	name: {
		fontSize: '3rem',
		fontWeight: '700',
		color: '#E98A33',
	},
	description: {
		fontSize: '1.1rem',
		marginTop: '25px',
		textAlign: 'justify',
	},
};

export default AboutCompany;
