import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	// title: 'Thuê xe nâng tại Bà Rịa | Giá tốt 0938.333.000',
	title: {
		default:
			'Cho thuê xe nâng tại Bà Rịa | Long Anh Phát | Giá tốt 0938.333.000',
		template:
			'%s - Cho thuê xe nâng tại Bà Rịa | Long Anh Phát | Giá tốt 0938.333.000',
	},
	description:
		'Công ty Long Anh Phát chuyên cung cấp dịch vụ cho thuê xe nâng uy tín, chất lượng tại Bà Rịa. Đa dạng loại xe nâng hàng, nâng điện, nâng dầu từ các hãng nổi tiếng. Giá cả hợp lý, nhân viên chuyên nghiệp, cam kết dịch vụ tốt nhất | Liên Hệ [ 0938.333.000 A.Điển ]',
	keywords: [
		'thuê xe nâng Bà Rịa',
		'cho thuê xe nâng tại Bà Rịa',
		'dịch vụ cho thuê xe nâng Bà Rịa',
		'thuê xe nâng Bà Rịa - Long Anh Phát',
		'cho thuê xe nâng tại Bà Rịa - Long Anh Phát',
		'dịch vụ cho thuê xe nâng Bà Rịa- Long Anh Phát',
		'thuê xe nâng giá rẻ Bà Rịa',
		'sửa chữa xe nâng Bà Rịa',
		'quy trình thuê xe nâng Bà Rịa',
		'thuê xe nâng hàng Bà Rịa',
		'thuê xe nâng điện Bà Rịa',
		'thuê xe nâng dầu Bà Rịa',
		'xe nâng Nissan Bà Rịa',
		'xe nâng Komatsu Bà Rịa',
		'công ty Long Anh Phát',
	],
	icons: {
		icon: '/favicon.ico',
	},
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
				<Analytics />
			</body>
		</html>
	);
}
