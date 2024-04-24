import type { Metadata } from 'next';

import Footer from '../components/Footer';
import MainBar from '../components/MainBar';
import Navbar from '../components/NavBar';
import ServiceList from '../components/ServiceList';

export const metadata: Metadata = {
	title: 'Dịch vụ xe nâng tại Long Anh Phát',
	description:
		'Long Anh Phát cung cấp dịch vụ cho thuê xe nâng hàng, xe nâng điện, xe nâng dầu uy tín, chất lượng tại Bà Rịa Vũng Tàu. Đội ngũ nhân viên chuyên nghiệp, xe nâng đa dạng thương hiệu như Nissan, Komatsu, Toyota. Giá cả hợp lý, cam kết dịch vụ tốt nhất. Liên hệ 0938 333 000 để được tư vấn.',
	keywords: [
		'cho thuê xe nâng hàng tại bà rịa vũng tàu',
		'thuê xe nâng điện giá rẻ',
		'dịch vụ cho thuê xe nâng dầu chuyên nghiệp',
		'công ty cho thuê xe nâng uy tín',
		'xe nâng nissan chất lượng cao',
		'xe nâng komatsu bảo hành lâu dài',
		'sửa chữa xe nâng tại long anh phát',
		'quy trình thuê xe nâng đơn giản',
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

export default function ServicesPage() {
	return (
		<main>
			<Navbar links={navLinks} />
			<MainBar />
			<ServiceList />
			<Footer />
		</main>
	);
}
