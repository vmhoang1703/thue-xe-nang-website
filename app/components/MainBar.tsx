'use client';

import { Fragment } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#fff',
	border: '1px solid #000',
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	width: '250px',
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'gray',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const MainBar = () => {
	const isTabletMobile = useMediaQuery('(max-width:1100px)');

	return (
		<div>
			<AppBar position="static" sx={styles.mainbar} elevation={1}>
				<Container
					maxWidth="xl"
					sx={{
						...styles.container,
						padding: isTabletMobile ? '20px 0px' : '35px 0px',
						justifyContent: isTabletMobile ? 'center' : 'space-between',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Link href={'/'}>
							<Image
								src={'/logo.png'}
								alt={'Logo Image'}
								width={isTabletMobile ? 150 : 250}
								height={isTabletMobile ? 50 : 70}
								priority
							/>
						</Link>
					</Box>
					{!isTabletMobile && (
						<Fragment>
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Tìm kiếm..."
									inputProps={{ 'aria-label': 'search' }}
								/>
							</Search>
							<Box component="section" sx={styles.box}>
								<Image
									src={'/hotline.png'}
									alt={'Hotline Icon'}
									width={50}
									height={50}
								/>
								<Box component="section" sx={styles.boxText}>
									<p>HOTLINE tư vấn 24/7</p>
									<p style={styles.textBottom}>0938.333.000 (Mr. Điển)</p>
								</Box>
							</Box>
							<Box component="section" sx={styles.box}>
								<Image
									src={'/map.png'}
									alt={'Map Icon'}
									width={50}
									height={50}
								/>
								<Box component="section" sx={styles.boxText}>
									<p>Địa chỉ mua hàng</p>
									<p style={styles.textBottom}>19A/2 KP 8A / Tân Biên</p>
								</Box>
							</Box>
						</Fragment>
					)}
				</Container>
			</AppBar>
		</div>
	);
};

const styles = {
	mainbar: {
		backgroundColor: '#F5F3F3',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	box: {
		display: 'flex',
	},
	boxText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		color: 'black',
		fontSize: 15,
		paddingLeft: '20px',
		height: 'auto',
	},
	textBottom: {
		fontWeight: '600',
	},
};

export default MainBar;
