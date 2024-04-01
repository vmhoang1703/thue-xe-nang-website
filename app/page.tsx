import Navbar from './components/NavBar';
import MainBar from './components/MainBar';

const links = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Dịch vụ', path: '/dich-vu' },
  { label: 'Liên hệ', path: '/lien-he' },
];

export default function Home() {
  return (
    <main>
      <Navbar links={links} />
      <MainBar />
    </main>
  );
}