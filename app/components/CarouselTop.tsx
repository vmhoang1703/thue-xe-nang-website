'use client';

import { type FC } from 'react';
import Carousel from 'react-material-ui-carousel';

import CarouselItem from './CarouselItem';

interface CarouselTopProps {
	items: { imageUrl: string }[];
}

const CarouselTop: FC<CarouselTopProps> = ({ items }) => {
	return (
		<Carousel>
			{items.map((item, i) => (
				<CarouselItem key={i} item={item} />
			))}
		</Carousel>
	);
};

export default CarouselTop;
