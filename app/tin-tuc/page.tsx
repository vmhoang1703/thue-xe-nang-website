import type { Metadata } from 'next';

import Footer from '../components/Footer';
import MainBar from '../components/MainBar';
import Navbar from '../components/NavBar';
import NewsList from '../components/NewsList';

export const metadata: Metadata = {
	title: 'Tin Tức Về Các Dịch Vụ Tại Long Anh Phát',
	description:
		'Cập nhật tin tức mới nhất về dịch vụ cho thuê xe nâng hàng, xe nâng điện, xe nâng dầu chuyên nghiệp tại Long Anh Phát Bà Rịa Vũng Tàu. Giới thiệu các loại xe nâng uy tín như Nissan, Komatsu, Toyota. Tư vấn quy trình thuê xe nâng đơn giản, giá cả hợp lý.',
	keywords: [
		'tin tức cho thuê xe nâng',
		'tin tức về xe nâng hàng',
		'tin tức xe nâng điện',
		'tin tức xe nâng dầu',
		'tin tức xe nâng Nissan',
		'tin tức xe nâng Komatsu',
		'tin tức xe nâng Toyota',
		'tin tức dịch vụ cho thuê xe nâng',
		'tin tức công ty Long Anh Phát',
		'tin tức sửa chữa xe nâng',
		'tin tức quy trình thuê xe nâng',
	],
	icons: {
		icon: '/favicon.ico',
	},
};

const navLinks = [
	{ label: 'Trang chủ', path: '/' },
	{ label: 'Dịch vụ', path: '/dich-vu' },
	{ label: 'Tin tức', path: '/tin-tuc' },
	// { label: 'Liên hệ', path: '/lien-he' },
];

export default function NewsPage() {
	return (
		<main>
			<Navbar links={navLinks} />
			<MainBar />
			<NewsList />
			<Footer />
		</main>
	);
}
