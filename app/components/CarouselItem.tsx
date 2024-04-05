'use client';

import { type FC } from 'react';
import Image from 'next/legacy/image';

interface CarouselItemProps {
	imageUrl: string;
}

const CarouselItem: FC<{ item: CarouselItemProps }> = ({ item }) => {
	return (
		<div>
			<Image
				src={item.imageUrl}
				alt="Carousel Item"
				width={400}
				height={200}
				layout="responsive"
				priority
			/>
		</div>
	);
};

export default CarouselItem;
