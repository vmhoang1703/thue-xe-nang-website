'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const ConsultingForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		companyName: '',
		phoneNumber: '',
		requirement: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_ENDPOINT}/send-email`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				},
			);

			if (response.status == 200) {
				alert('Gửi yêu cầu thành công!');
				setFormData({
					name: '',
					email: '',
					companyName: '',
					phoneNumber: '',
					requirement: '',
				});
			} else {
				alert('Gửi yêu cầu thất bại! Vui lòng thử lại');
			}
		} catch (error) {
			alert('Gửi yêu cầu thất bại! Vui lòng thử lại');
		}
	};

	return (
		<Container maxWidth="xl" sx={styles.container}>
			<Box sx={styles.bigBox}>
				<Box sx={styles.leftBox}>
					<Box
						component="form"
						noValidate
						autoComplete="off"
						sx={styles.form}
						onSubmit={handleSubmit}
					>
						<TextField
							fullWidth
							margin="normal"
							label="Họ và tên"
							variant="outlined"
							InputProps={{ sx: { backgroundColor: 'white' } }}
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Email"
							variant="outlined"
							InputProps={{ sx: { backgroundColor: 'white' } }}
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Tên công ty"
							variant="outlined"
							InputProps={{ sx: { backgroundColor: 'white' } }}
							name="companyName"
							value={formData.companyName}
							onChange={handleInputChange}
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Số điện thoại"
							variant="outlined"
							InputProps={{ sx: { backgroundColor: 'white' } }}
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleInputChange}
						/>
						<TextField
							fullWidth
							id="outlined-multiline-flexible"
							margin="normal"
							label="Yêu cầu"
							multiline
							minRows={5}
							variant="outlined"
							InputProps={{ sx: { backgroundColor: 'white' } }}
							name="requirement"
							value={formData.requirement}
							onChange={handleInputChange}
						/>
						<Button type="submit" variant="contained" color="error">
							Gửi yêu cầu
						</Button>
					</Box>
				</Box>
				<Box sx={styles.rightBox}>
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
							<p style={styles.about}>TƯ VẤN MIỄN PHÍ</p>
							<p style={styles.name}>LONG ANH PHÁT</p>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

const styles = {
	container: {
		backgroundImage: 'url("/bgForm.png")',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	},
	bigBox: {
		display: 'flex',
	},
	leftBox: {
		width: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px',
	},
	rightBox: {
		width: '50%',
	},
	companyNameBox1: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '40px',
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
		fontWeight: 550,
		marginTop: '25px',
		textAlign: 'justify' as never,
	},
	imageContainer: {
		position: 'relative',
		width: '100%',
		maxWidth: 800,
		marginBottom: 4,
	},
	form: {
		maxWidth: 400,
	},
};

export default ConsultingForm;
