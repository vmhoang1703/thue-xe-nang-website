import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

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
