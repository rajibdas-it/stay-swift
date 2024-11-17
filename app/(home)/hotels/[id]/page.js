import Gallery from '@/components/hotel/details/Gallery';
import Overview from '@/components/hotel/details/Overview';
import Summary from '@/components/hotel/details/Summary';
import { getHotelById } from '@/database/quries';
import React from 'react';

const HotelDetailsPage = async ({ params: { id } }) => {
    const hotel = await getHotelById(id)
    return (
        <>
            <Summary info={hotel} />
            <Gallery gallery={hotel.gallery} />
            <Overview hotelInfo={hotel} />
        </>
    );
};

export default HotelDetailsPage;