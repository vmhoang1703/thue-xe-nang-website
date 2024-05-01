import Divider from '@mui/material/Divider';

// import type { Metadata } from 'next';
import AboutCompany from './components/AboutCompany';
import CarouselTop from './components/CarouselTop';
import ConsultingForm from './components/ConsultingForm';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBar from './components/MainBar';
import Navbar from './components/NavBar';
import News from './components/News';
import Partner from './components/Partner';
import ScrollToTopButton from './components/ScrollToTopButton';
import Service from './components/Service';

// export const metadata: Metadata = {
// 	title: 'Thuê xe nâng Bà Rịa',
// 	description:
// 		'Công ty Long Anh Phát chuyên cung cấp dịch vụ cho thuê xe nâng uy tín, chất lượng tại Bà Rịa. Đa dạng loại xe nâng hàng, nâng điện, nâng dầu từ các hãng nổi tiếng. Giá cả hợp lý, nhân viên chuyên nghiệp, cam kết dịch vụ tốt nhất | Liên Hệ [ 0938.333.000 A.Điển ]',
// 	keywords: [
// 		'thuê xe nâng Bà Rịa',
// 		'cho thuê xe nâng tại Bà Rịa',
// 		'dịch vụ cho thuê xe nâng Bà Rịa',
// 		'thuê xe nâng giá rẻ Bà Rịa',
// 		'sửa chữa xe nâng Bà Rịa',
// 		'quy trình thuê xe nâng Bà Rịa',
// 		'thuê xe nâng hàng Bà Rịa',
// 		'thuê xe nâng điện Bà Rịa',
// 		'thuê xe nâng dầu Bà Rịa',
// 		'xe nâng Nissan Bà Rịa',
// 		'xe nâng Komatsu Bà Rịa',
// 		'công ty Long Anh Phát',
// 	],
// 	icons: {
// 		icon: '/favicon.ico',
// 	},
// };

const navLinks = [
	{ label: 'Trang chủ', path: '/' },
	{ label: 'Dịch vụ', path: '/dich-vu' },
	{ label: 'Tin tức', path: '/tin-tuc' },
	// { label: 'Liên hệ', path: '/lien-he' },
];

const headerLinks = [
	{ label: 'Trang chủ', path: '/' },
	{ label: 'Giới thiệu', path: '/' },
	{ label: 'Dịch vụ', path: '/' },
	{ label: 'Tin tức', path: '/' },
	{ label: 'Đối tác', path: '/' },
	{ label: 'Tư vấn', path: '/' },
];

const items = [
	{
		imageUrl: '/slider-01.jpg',
	},
	{
		imageUrl: '/slider-02.jpg',
	},
	{
		imageUrl: '/slider-03.jpg',
	},
	{
		imageUrl: '/slider-04.jpg',
	},
];

const logos = [
	{ src: '/masan.png', alt: 'Massan Logo' },
	{ src: '/ajinomoto.png', alt: 'Ajinomoto Logo' },
	{ src: '/logo.png', alt: 'Long Anh Phat Logo' },
	{ src: '/tienphat.png', alt: 'Tien Phat Logo' },
	{ src: '/thaco.png', alt: 'Thaco Logo' },
];

export default function Home() {
	return (
		<main
		// style={{ backgroundImage: 'url("/background.png")' }}
		>
			<Navbar links={navLinks} />
			<MainBar />
			<Header links={headerLinks} />
			<CarouselTop items={items} />
			<AboutCompany />
			<Divider />
			<Service />
			<News />
			<Divider />
			<Partner logos={logos} />
			<ConsultingForm />
			<Footer />
			<ScrollToTopButton />
		</main>
	);
}
