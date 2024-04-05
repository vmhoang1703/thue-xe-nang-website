import AboutCompany from './components/AboutCompany';
import CarouselTop from './components/CarouselTop';
import Header from './components/Header';
import MainBar from './components/MainBar';
import Navbar from './components/NavBar';

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

export default function Home() {
	return (
		<main style={{ backgroundImage: 'url("/background.png")' }}>
			<Navbar links={navLinks} />
			<MainBar />
			<Header links={headerLinks} />
			<CarouselTop items={items} />
			<AboutCompany />
		</main>
	);
}
