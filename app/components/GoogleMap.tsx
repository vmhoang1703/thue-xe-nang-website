'use client';

import { type FC } from 'react';
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';

interface AnyReactComponentPros {
	lat: number;
	lng: number;
	text: string;
}

const AnyReactComponent: FC<AnyReactComponentPros> = ({ lat, lng, text }) => (
	<div>
		<div style={{ display: 'none' }}>
			{lat},{lng},{text}
		</div>
		<Image src={'/maker.png'} alt={'Maker icon'} width={50} height={50} />
	</div>
);

const GoogleMap = () => {
	const defaultProps = {
		center: {
			lat: 10.960661,
			lng: 106.869914,
		},
		zoom: 17,
	};

	return (
		<div style={{ height: '250px', width: '370px' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={10.960661} lng={106.869914} text="LAP" />
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;
