import Navbar from './components/NavBar';
import MainBar from './components/MainBar';
import Header from './components/Header';

const navLinks = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Dịch vụ', path: '/dich-vu' },
  { label: 'Liên hệ', path: '/lien-he' },
];

const headerLinks = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/'},
  { label: 'Dịch vụ', path: '/'},
  { label: 'Tin tức', path: '/'},
  { label: 'Đối tác', path: '/'},
  { label: 'Tư vấn', path: '/'},
];

export default function Home() {
  return (
    <main>
      <Navbar links={navLinks} />
      <MainBar />
      <Header links={headerLinks}/>
    </main>
  );
}