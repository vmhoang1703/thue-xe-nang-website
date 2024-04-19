'use client';

import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

import FeaturesBox from './FeatureBox';

const AboutCompany = () => {
	const isMobile = useMediaQuery('(max-width: 600px)');
	const features = [
		{ label: 'Chất lượng tốt' },
		{ label: 'Uy tín' },
		{ label: 'Chuyên nghiệp' },
		{ label: 'Ưu đãi' },
	];

	return (
		<Container sx={isMobile ? styles.mobileContainer : styles.container}>
			<Box sx={isMobile ? styles.mobileBox : styles.bigBox}>
				<Box sx={isMobile ? styles.mobileLeftBox : styles.leftBox}>
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
								sx={isMobile ? styles.mobileColumnTheme : styles.columnTheme}
							/>
						</ThemeProvider>
						<Box sx={styles.companyNameBox2}>
							<p style={isMobile ? styles.mobileAbout : styles.about}>
								VỀ CHÚNG TÔI
							</p>
							<p style={isMobile ? styles.mobileName : styles.name}>
								LONG ANH PHÁT
							</p>
						</Box>
					</Box>
					<p style={isMobile ? styles.mobileDescription : styles.description}>
						Thành lập từ năm 2003, Long Anh Phát là một trong những công ty CHO
						THUÊ XE NÂNG ĐẦU TIÊN TẠI BÀ RỊA và đã có những bước đi vững chắc để
						trở thành thương hiệu uy tín và được rất nhiều sự tín nhiệm trên thị
						trường. Năm 2008, Công Ty TNHH Long Anh Phát được xếp hạng nằm trong
						top 500 doanh nghiệp lớn nhất Việt Nam do báo Vietnamnet bình chọn,
						xếp hạng tín dụng AAA (2012) và A (2014).
					</p>
				</Box>
				{!isMobile && (
					<Box sx={styles.rightBox}>
						<Image
							src={'/introImage.png'}
							alt={'forklift image'}
							width={350}
							height={250}
							priority
						/>
					</Box>
				)}
			</Box>
			<FeaturesBox features={features} />
		</Container>
	);
};

const styles = {
	container: {
		marginTop: '85px',
		paddingBottom: '50px',
	},
	mobileContainer: {
		marginTop: '30px',
		paddingBottom: '50px',
	},
	bigBox: {
		display: 'flex',
	},
	mobileBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	leftBox: {
		width: '50%',
	},
	mobileLeftBox: {
		width: '100%',
		marginBottom: '20px',
	},
	columnTheme: {
		width: 10,
		height: 100,
		borderRadius: 30,
		bgcolor: '#E98A33',
	},
	mobileColumnTheme: {
		width: 7,
		height: 70,
		borderRadius: 30,
		bgcolor: '#E98A33',
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
	mobileAbout: {
		fontSize: '1rem',
		fontWeight: '600',
		padding: 0,
		margin: 0,
	},
	name: {
		fontSize: '3rem',
		fontWeight: '700',
		color: '#E98A33',
	},
	mobileName: {
		fontSize: '2rem',
		fontWeight: '700',
		color: '#E98A33',
	},
	description: {
		fontSize: '1.1rem',
		fontWeight: 550,
		marginTop: '25px',
		textAlign: 'justify' as never,
	},
	mobileDescription: {
		fontSize: '1rem',
		fontWeight: 550,
		marginTop: '25px',
		textAlign: 'justify' as never,
	},
};

export default AboutCompany;
