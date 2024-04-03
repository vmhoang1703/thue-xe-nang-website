import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Thuê xe nâng Bà Rịa - Long Anh Phát',
	description:
		'Chuyên thuê xe nâng tại Bà Rịa. Cam kết uy tín và chuyên nghiệp nhất | L.Hệ [ 0938.333.000 A.Điển ]',
};

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
