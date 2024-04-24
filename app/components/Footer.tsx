import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

function Copyright() {
	return (
		<p>
			<p>Copyright © C.TY TNHH Long Anh Phát {new Date().getFullYear()}</p>
		</p>
	);
}

const Footer = () => {
	return (
		<Container maxWidth="xl" sx={{ backgroundColor: '#F5F3F3' }}>
			<Container maxWidth="lg" sx={styles.container}>
				<Box sx={styles.mainBox}>
					<Box sx={styles.sideBox}>
						<Box sx={styles.newsletterBox}>
							<Box sx={styles.logoAndName}>
								<Box>
									<Image
										src={'/logo.png'}
										alt={'Logo icon'}
										width={75}
										height={30}
									/>
								</Box>
								<p style={styles.companyName}>CÔNG TY TNHH LONG ANH PHÁT</p>
							</Box>
							<div style={styles.companyInfo}>
								<p>
									Địa chỉ Cơ Sở 1: 19A/2 , KP 8A , Phường Tân Biên , Thành Phố
									Biên Hòa
									<br />
									Địa chỉ Cơ Sở 2: 158/16 Trần Huy Liệu. Q,Phú Nhuận. TPHCM
									<br />
									Phone: 0937.333.000 - 0938.333.000 (A. Điển)
									<br />
									Email: longanhphat@gmail.com
									<br />
									Giờ mở cửa: 08:00 AM ‐ 17:30 PM
								</p>
							</div>
						</Box>
					</Box>
				</Box>
				<Box sx={styles.footerDivider}>
					<div>
						<Copyright />
					</div>
					<Stack
						direction="row"
						justifyContent="left"
						spacing={1}
						useFlexGap
						sx={{
							color: 'text.secondary',
						}}
					>
						<IconButton
							color="inherit"
							href="https://github.com/mui"
							aria-label="GitHub"
							sx={{ alignSelf: 'center' }}
						>
							<FacebookIcon />
						</IconButton>
						<IconButton
							color="inherit"
							href="https://twitter.com/MaterialUI"
							aria-label="X"
							sx={{ alignSelf: 'center' }}
						>
							<TwitterIcon />
						</IconButton>
					</Stack>
				</Box>
			</Container>
		</Container>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: { xs: 2, sm: 4 },
		py: { xs: 4, sm: 6 },
		textAlign: { sm: 'center', md: 'left' },
	},
	mainBox: {
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'row' },
		width: '100%',
		justifyContent: 'space-between',
	},
	sideBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: 4,
		minWidth: { xs: '100%', sm: '60%' },
	},
	newsletterBox: {
		width: { xl: '100%', xs: '100%', sm: '60%' },
	},
	logoAndName: {
		display: 'flex',
		alignItems: 'center',
	},
	companyName: {
		fontSize: '1.5rem',
		fontWeight: 750,
		marginLeft: '10px',
		display: 'flex',
		alignItems: 'center',
		// color: '#fff',
	},
	companyInfo: {
		fontSize: '1rem',
		fontWeight: 500,
		marginTop: 20,
	},
	iconButtonBox: {
		display: { xs: 'none', sm: 'flex' },
		flexDirection: 'column',
		gap: 1,
	},
	footerDivider: {
		display: 'flex',
		justifyContent: 'space-between',
		pt: { xs: 2, sm: 4 },
		width: '100%',
		borderTop: '1px solid',
		borderColor: 'divider',
	},
};

export default Footer;
