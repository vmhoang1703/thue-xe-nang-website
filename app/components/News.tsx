import Container from '@mui/material/Container';

import { fetchAllNews } from '../../contenful/news';

import NewsCard from './NewsCard';
import SectionTitle from './SectionTitle';

const News = async () => {
	const news = await fetchAllNews();
	const selectedNews = news.slice(0, 6);

	return (
		<Container sx={styles.container}>
			<SectionTitle title="TIN TỨC NỔI BẬT" />
			<div style={styles.newsContainer}>
				{selectedNews.map((item) => (
					<NewsCard
						key={item.slug}
						imageUrl={item.imageUrl?.src || 'https://via.placeholder.com/150'}
						title={item.title}
						shortDescription={item.shortDescription}
						createdAt={item.createdAt}
					/>
				))}
			</div>
		</Container>
	);
};

const styles = {
	container: {
		backgroundColor: '#fff',
		paddingBottom: '50px',
	},
	newsContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '50px',
		flexWrap: 'wrap' as never,
		maxWidth: '1200px',
		margin: '0 auto',
	},
};

export default News;
