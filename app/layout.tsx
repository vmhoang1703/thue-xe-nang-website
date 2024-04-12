import { Montserrat } from 'next/font/google';

import 'dotenv/config';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

if (process.env.NODE_ENV === 'production') {
	require('dotenv').config({ path: '.env.production' });
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
