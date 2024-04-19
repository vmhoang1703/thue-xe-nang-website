'use client';

import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';

const ScrollToTopButton = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (typeof window !== 'undefined' && window.pageYOffset > 300) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	return (
		<Zoom in={trigger}>
			<div onClick={scrollToTop} role="presentation" style={styles.button}>
				<Fab color="primary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</div>
		</Zoom>
	);
};

const styles = {
	button: {
		position: 'fixed' as const,
		bottom: 30,
		right: 15,
		zIndex: 99,
		cursor: 'pointer',
	},
};

export default ScrollToTopButton;
