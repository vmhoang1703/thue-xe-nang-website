"use client";

import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';

interface CarouselItem {
    imageUrl: string;
}

interface CarouselTopProps {
    items: CarouselItem[];
}

const CarouselTop: React.FC<CarouselTopProps> = ({ items }) => {
    return (
        <Carousel>
            {items.map((item, i) => <CarouselItem key={i} item={item} />)}
        </Carousel>
    );
}

const CarouselItem: React.FC<{ item: CarouselItem }> = ({ item }) => {
    return (
        <div>
            <Image src={item.imageUrl} alt="Carousel Item" width={400} height={200} layout="responsive"  />
        </div>
    );
}

export default CarouselTop;
