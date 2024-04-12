import Divider from '@mui/material/Divider';

import AboutCompany from './components/AboutCompany';
import CarouselTop from './components/CarouselTop';
import Header from './components/Header';
import MainBar from './components/MainBar';
import Navbar from './components/NavBar';
import News from './components/News';
import Partner from './components/Partner';
import Service from './components/Service';

const navLinks = [
	{ label: 'Trang chủ', path: '/' },
	{ label: 'Dịch vụ', path: '/dich-vu' },
	{ label: 'Liên hệ', path: '/lien-he' },
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
		<main style={{ backgroundImage: 'url("/background.png")' }}>
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
		</main>
	);
}
